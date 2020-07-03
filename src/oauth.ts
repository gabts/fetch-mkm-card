import * as crypto from "crypto";
import type { Keys } from "./types";

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

type Params = {
  oauth_consumer_key: string;
  oauth_nonce: string;
  oauth_signature_method: string;
  oauth_timestamp: string;
  oauth_token: string;
  oauth_version: string;
};

function sign(url: string, params: Params, keys: Keys) {
  const paramsStr = Object.keys(params)
    // @ts-ignore - type 'string' can't be used to index hurr durrrr
    .map((key) => `${key}=${params[key]}`)
    .join("&");

  const str = `GET&${encodeURIComponent(url)}&${encodeURIComponent(paramsStr)}`;

  const hmac = crypto.createHmac("sha1", keys.secret);
  hmac.update(str);
  return hmac.digest("base64");
}

export function oauth(url: string, keys: Keys) {
  const params: Params = {
    oauth_consumer_key: keys.appToken,
    oauth_nonce: "" + s4() + s4() + s4(),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: "" + Math.round(Date.now() / 1000),
    oauth_token: keys.accessToken,
    oauth_version: "1.0",
  };

  const signature = sign(url, params, keys);

  const oauthParams = Object.keys(params)
    // @ts-ignore - type 'string' can't be uSeD tO InDEx :ppPppP
    .map((key) => `${key}="${params[key]}"`)
    .join(", ");

  return `OAuth realm="${url}", ${oauthParams}, oauth_signature="${signature}"`;
}
