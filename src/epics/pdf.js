import { EXPORT_TO_PDF } from 'actions/print'
// import ReactPDF from '@react-pdf/node'
// import PhotoPrintout from 'components/content/PhotoPrintout'

export default action$ => action$
  .ofType(EXPORT_TO_PDF)
  .do(() => {
    // ReactPDF.render(<PhotoPrintout />, `${__dirname}/example.pdf`)
  })
