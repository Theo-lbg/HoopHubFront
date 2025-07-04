import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hoophub.fr',
  appName: 'HoopHub',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
