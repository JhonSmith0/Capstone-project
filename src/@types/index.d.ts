declare global {
  namespace NodeJS {
    interface ProcessEnv {
      apiKey: string;
      authDomain: string;
      projectId: string;
      storageBucket: string;
      messagingSenderId: string;
      appId: string;
    }
  }

  interface ImportMetaEnv {
    readonly VITE_apiKey: string;
    readonly VITE_authDomain: string;
    readonly VITE_projectId: string;
    readonly VITE_storageBucket: string;
    readonly VITE_messagingSenderId: string;
    readonly VITE_appId: string;
  }
}
export {};
