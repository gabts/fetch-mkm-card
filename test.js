const { fetchMkmCard } = require("./dist");

const [
  appToken,
  appSecret,
  accessToken,
  accessTokenSecret,
] = process.argv[2].split(",");

fetchMkmCard.init({
  appToken,
  appSecret,
  accessToken,
  accessTokenSecret,
});

fetchMkmCard("Rhox").then((res) => {
  console.log(res.status === 200 ? "TEST SUCCESSFUL" : "TEST FAILED");
});
