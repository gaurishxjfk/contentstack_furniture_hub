import { Config, Region, Stack } from "contentstack";


const {
  CONTENTSTACK_API_KEY,
  CONTENTSTACK_DELIVERY_TOKEN,
  CONTENTSTACK_ENVIRONMENT,
  CONTENTSTACK_REGION,
  CONTENTSTACK_BRANCH,
} = process.env;



// contentstack sdk initialization
export const initializeContentStackSdk = (): Stack => {
  const stackConfig: Config = {
    api_key: CONTENTSTACK_API_KEY as string,
    delivery_token: CONTENTSTACK_DELIVERY_TOKEN as string,
    environment: CONTENTSTACK_ENVIRONMENT as string,
    region: CONTENTSTACK_REGION as Region | undefined,
    branch: CONTENTSTACK_BRANCH || "main",
  };
  return Stack(stackConfig);
};
