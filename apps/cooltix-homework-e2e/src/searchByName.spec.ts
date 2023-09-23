import { test, expect } from '@playwright/test';

test('should list members', async ({ page }) => {
  await page.goto('/');

  const searchBar = page.locator('[data-test-id="search-bar"]');
  await searchBar.fill('a');

  // eslint-disable-next-line playwright/no-wait-for-timeout
  await page.waitForTimeout(500);

  const members = page.locator('[data-test-id="list-item"]');
  const count = await members.count();
  expect(count).toBeGreaterThan(0);
});
