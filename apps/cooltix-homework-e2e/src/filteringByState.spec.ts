import { test, expect } from '@playwright/test';

test.describe('Filtering by state', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Filtering for Arizona should update the URL', async ({ page }) => {
    const checkbox = await page.waitForSelector('[data-test-id="filter-option=Arizona"]');
    await checkbox.click();

    // eslint-disable-next-line playwright/no-wait-for-timeout
    await page.waitForTimeout(500);
    
    expect(page.url()).toContain('Arizona');
  });

  test('Filtering for Arizona and Alaska should update the URL', async ({ page }) => {
    let checkbox = await page.waitForSelector('[data-test-id="filter-option=Alaska"]');
    await checkbox.click();

    checkbox = await page.waitForSelector('[data-test-id="filter-option=Arizona"]');
    await checkbox.click();

    // eslint-disable-next-line playwright/no-wait-for-timeout
    await page.waitForTimeout(500);
    
    expect(page.url()).toContain('Arizona');
    expect(page.url()).toContain('Alaska');
  });

  test('Filtering for Alaska should display members', async ({ page }) => {
    const checkbox = await page.waitForSelector('[data-test-id="filter-option=Alaska"]');
    await checkbox.click();
    const members = page.locator('[data-test-id="list-item"]')

    // eslint-disable-next-line playwright/no-wait-for-timeout
    await page.waitForTimeout(500);

    const count = await members.count();
    expect(count).toBeGreaterThan(0);
  });
});
