const fetch = require('node-fetch')
const fs = require('fs')

class FaceApiClient {
  constructor (endpoint, key, group) {
    this.endpoint = endpoint
    this.key = key
    this.group = group
  }

  detect (path) {
    const fileBuffer = fs.readFileSync(path)

    return fetch(this.endpoint + '/detect', {
      method: 'post',
      headers: {
        'Ocp-Apim-Subscription-Key': this.key,
        'Content-Type': 'application/octet-stream'
      },
      body: fileBuffer
    }).then(res => res.json())
  }

  identify (path) {
    return this.detect(path)
      .then(data => data.map(face => face.faceId))
      .then(faceIds => {
        return fetch(this.endpoint + '/identify', {
          method: 'post',
          headers: {
            'Ocp-Apim-Subscription-Key': this.key
          },
          body: JSON.stringify({
            personGroupId: this.group,
            faceIds,
            maxNumOfCandidatesReturned: 1,
            confidenceThreshold: 0.5
          })
        }).then(res => res.json())
      })
  }

  getPersonsInfo (personIds) { // personIds: string[]
    const promiseArray = personIds.map(personId => fetch(`${this.endpoint}/persongroups/${this.group}/persons/${personId}`, {
      headers: {
        'Ocp-Apim-Subscription-Key': this.key
      }
    }).then(res => res.json()))
    return Promise.all(promiseArray)
  }
}

module.exports = FaceApiClient
