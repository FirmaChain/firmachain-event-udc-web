# **firmachain-event-udc-web**
![UDC Airdrop event web](https://github.com/FirmaChain/firmachain-event-udc-web/assets/93503020/6cfd10ba-6c05-4a8c-9d01-ffbd7f9656ce)

## **Overview**
firmachain-event-udc-web is a DApp developed for offline events. By using this DApp, users of FirmaStation mobile wallets can scan a QR code to connect their wallets to the DApp. Once the connection is established, users can directly receive and verify "__event tokens and NFTs__" in their wallets. In addition, event tokens can be converted to FCT through a specific swap application.

<br/>

## **Build Instructions**
You can build the project following the instructions below.
```bash
# Clone the repository
$ git clone https://github.com/FirmaChain/firmachain-event-udc-web.git

# Navigate to the project directory
$ cd firmachain-event-udc-web

# Install the necessary packages
$ npm install
```

<br/>

## **Copy .env sample**
Please copy .env.sample to .env.
```bash
# Copy .env file
$ cp .env.sample .env
```

Please assign appropriate values to the following variables.

- `PORT` : Specifies the port where the web operates. (For example, 3000).

- `API_HOST` : Wallet Connect Relay server address. (For example, https://firmaconnect.dev/)

<br/>

## **Copy locale.json sample**
Please copy locale.sample.json to locale.json.
```bash
# Copy locale.json
cp locale.sample.json locale.json
```

Values that start with 'step' are image file paths, and other variables are notification messages. Please assign the appropriate paths to the variables.

<br/>

## **Execution**
```bash
# Build the web
$ npm run build

# Start the web
$ npm run start
```
