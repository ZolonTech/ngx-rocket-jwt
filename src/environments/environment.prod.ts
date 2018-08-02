// `.env.ts` is generated by the `npm run env` command
import env from './.env';

export const environment = {
  production: true,
  useDummyAuth: true,
  version: env.npm_package_version,
  serverUrl: 'https://api.chucknorris.io',
  apiUrl: 'localhost',
  authUrl: 'localhost',
  credentials: 'credentials',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US']
};
