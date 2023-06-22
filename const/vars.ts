type Props = {
  baseUrl?: string;
  rapidUrl?: string;
  apiKey?: string;
  hostUrl?: string;
};

export const publicConfig: Props = {
  baseUrl: process.env.NEXT_BASE_URL,
  rapidUrl: process.env.NEXT_GOOGLE_URL,
  apiKey: process.env.NEXT_API_KEY,
  hostUrl: process.env.NEXT_HOST_URL,
};
