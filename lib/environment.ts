export const environment = {
  api: {
    token: process.env.API_TOKEN ?? '',
    url: process.env.NEXT_PUBLIC_API_URL ?? '',
    root: process.env.NEXT_PUBLIC_API_ROOT ?? ''
  }
};