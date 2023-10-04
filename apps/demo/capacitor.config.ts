import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.techpromux.demo',
  appName: 'application',
  webDir: '../../dist/apps/demo',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
