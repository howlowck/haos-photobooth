# Hao's Photobooth

## Hardware Required 
* a TriggerTrap for DSLR only (or any audio to trigger device)
* [Canon Selphy CP1200](https://www.amazon.com/Canon-Selphy-CP1200-Wireless-Printer/dp/B0195JC9D2) (or any IPP-compatible printer)

## Software Required
* [Canon EOS Utility](https://www.usa.canon.com/internet/portal/us/home/support/self-help-center/eos-utility)
* NodeJS

## Getting Started
1. `yarn` install all the dependencies
1. Config your app in these places
1. `build/scripts/start.js` change the printer IP to your IP (line 14)
1. Duplicate `.env.example` to `.env` and specify your Face API creds
1. Add a `logo.jpg` (the logo at the top of the photostrip) to the `public` directory
2. `yarn start` starts the photobooth in `localhost:3000`
