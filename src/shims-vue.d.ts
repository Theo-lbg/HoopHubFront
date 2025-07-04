/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@capacitor/core' {
  interface PluginRegistry {
    // Ajoutez ici les plugins Capacitor que vous utilisez
  }
}
