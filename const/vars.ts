type Props = {
  baseUrl?: string;
};
export const publicConfig: Props = {
  baseUrl: process.env.NEXT_BASE_URL,
};
