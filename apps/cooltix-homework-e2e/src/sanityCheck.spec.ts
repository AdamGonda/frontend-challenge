import { test, expect } from '@playwright/test';

test('It has title', async ({ page }) => {
  await page.goto('/');

  await expect(page.title()).resolves.toMatch('Members only 😎');
});