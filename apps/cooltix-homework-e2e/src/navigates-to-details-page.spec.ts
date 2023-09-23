import { test, expect } from '@playwright/test';

test('Listing members', async ({ page }) => {
  await page.goto('/');

  await page.waitForSelector('[data-test-id="list-item-skeleton"]', {
    state: 'detached',
    timeout: 1000,
  });

  const members = page.locator('[data-test-id="list-item"]');
  await members.first().click();

  await page.waitForSelector('[data-test-id="details-page"]', {
    state: 'visible',
    timeout: 1000,
  });

  expect(page.url()).toContain('member');
});

