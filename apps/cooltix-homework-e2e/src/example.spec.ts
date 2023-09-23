import { test, expect, chromium } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page.title()).resolves.toMatch('Members only 😎');
});

test('should list members', async ({ page }) => {
  await page.goto('/');

  await page.waitForSelector('[data-test-id="list-item-skeleton"]', {
    state: 'detached',
    timeout: 1000,
  });

  const members = page.locator('[data-test-id="list-item"]');
  const count = await members.count();
  expect(count).toBeGreaterThan(0);
});
