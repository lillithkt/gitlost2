import { config } from "dotenv";
import { TwitterApi } from "twitter-api-v2";
config();

export const twitterClient = new TwitterApi({
  appKey: process.env.API_KEY!,
  appSecret: process.env.API_KEY_SECRET!,
  accessToken: process.env.ACCESS_TOKEN!,
  accessSecret: process.env.ACCESS_TOKEN_SECRET!,
});

export const tweet = async (text: string) => {
  return await twitterClient.v2.tweet(text);
};