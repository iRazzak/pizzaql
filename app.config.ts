import { ExpoConfig, ConfigContext } from "@expo/config"
import { config } from 'dotenv';
import path from 'path';

const envFile = path.join(__dirname, '.env');
const env = config({
  path: envFile,
});

if (env.error) {
  console.log('ENV FILE ERROR: ', envFile);
  throw env.error;
}
/**
 * Use ts-node here so we can use TypeScript for our Config Plugins
 * and not have to compile them to JavaScript
 */
require("ts-node/register")

/**
 * @param config ExpoConfig coming from the static config app.json if it exists
 * 
 * You can read more about Expo's Configuration Resolution Rules here:
 * https://docs.expo.dev/workflow/configuration/#configuration-resolution-rules
 */
module.exports = ({ config }: ConfigContext): Partial<ExpoConfig> => {
  const existingPlugins = config.plugins ?? []

  return {
    ...config,
    android: {
      intentFilters: [
        {
          action: 'VIEW',
          category: ['BROWSABLE', 'DEFAULT'],
        },
      ],
    },
    web: {
      favicon: './assets/favicon.webp',
    },
    extra: {
      ...env.parsed,
    },
    plugins: [
      ...existingPlugins,
      require("./plugins/withSplashScreen").withSplashScreen,
      require("./plugins/withFlipperDisabled").withFlipperDisabled,
    ],
  }
}
