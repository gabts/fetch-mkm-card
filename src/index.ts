import nodeFetch from "node-fetch";
import { oauth } from "./oauth";
import type { Keys } from "./types";

const _keys: Keys = {
  appToken: "",
  accessToken: "",
  secret: "",
};

export function fetchMkmCard(name: string) {
  const url = `https://api.cardmarket.com/ws/v1.1/output.json/products/${name}/1/1/false`;

  return nodeFetch(url, {
    headers: {
      Authorization: oauth(url, _keys),
    },
  });
}

fetchMkmCard.init = function (keys: {
  appToken: string;
  appSecret: string;
  accessToken: string;
  accessTokenSecret: string;
}) {
  _keys.appToken = keys.appToken;
  _keys.accessToken = keys.accessToken;

  const encodedAppSecret = encodeURIComponent(keys.appSecret);
  const encodedAccessTokenSecret = encodeURIComponent(keys.accessTokenSecret);

  _keys.secret = `${encodedAppSecret}&${encodedAccessTokenSecret}`;
};
