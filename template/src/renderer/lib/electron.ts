import {} from "@/schema";

declare global {
  interface Window {
    electron: {
      test: () => void;
    };
  }
}

/**
 * Typesafe variable to access ipc functions
 */
export const electron = window.electron;
