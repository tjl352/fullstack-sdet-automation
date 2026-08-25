import { defineConfig, devices } from '@playwright/test';
import { env } from './config/env';

/**
 * Add a type: create tests/<type>/, then add a project here.
 * Remove a type: delete the folder and its project.
 * Load tests are not Playwright — see k6/ and `npm run test:load`.
 */
export default defineConfig({
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  passWithNoTests: true,
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'api',
      testDir: './tests/api',
      use: { baseURL: env.apiBaseURL },
    },
    {
      name: 'ui',
      testDir: './tests/ui',
      use: { ...devices['Desktop Chrome'], baseURL: env.uiBaseURL },
    },
    {
      name: 'mobile',
      testDir: './tests/mobile',
      use: { ...devices['Pixel 5'], baseURL: env.uiBaseURL },
    },
    {
      name: 'ai',
      testDir: './tests/ai',
      use: { ...devices['Desktop Chrome'], baseURL: env.uiBaseURL },
    },
    {
      name: 'data',
      testDir: './tests/data',
      use: { baseURL: env.apiBaseURL },
    },
    {
      name: 'performance',
      testDir: './tests/performance',
      use: { ...devices['Desktop Chrome'], baseURL: env.uiBaseURL },
    },
    {
      name: 'accessibility',
      testDir: './tests/accessibility',
      use: { ...devices['Desktop Chrome'], baseURL: env.uiBaseURL },
    },
    {
      name: 'security',
      testDir: './tests/security',
      use: { baseURL: env.apiBaseURL },
    },
    {
      name: 'database',
      testDir: './tests/database',
    },
    {
      name: 'visual',
      testDir: './tests/visual',
      use: { ...devices['Desktop Chrome'], baseURL: env.uiBaseURL },
    },
  ],
});
