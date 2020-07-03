# fetch-mkm-card

A node client for fetching Magic: The Gathering card information with the [MKM](https://www.cardmarket.com/) API.

## 👑 Usage

```js
const { fetchMkmCard } = require("fetch-mkm-card");

fetchMkmCard.init({
  appToken: "XXXXXXXXXXXXXXXX",
  appSecret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  accessToken: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  accessTokenSecret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
});

const card = fetchMkmCard("Rhox").then((res) => res.json());
```

## 🧙‍♂️ Test

Run the test yarn script. Enter your Magic Cardmarket API credentials as a single node process arg, seperated by comma. Order should be: app token, app secret, access token, access token secret

```sh
yarn test XXXXXXXXXXXXXXXX,XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX,XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX,XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

## 📜 License

[MIT](./LICENSE)
