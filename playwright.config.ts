import { defineConfig, devices } from "@playwright/test";
import "dotenv/config";

export default defineConfig({
  testDir: "./tests",
  reporter: "list",
  use: {
    baseURL: process.env.TOOLSHOP_URL,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
