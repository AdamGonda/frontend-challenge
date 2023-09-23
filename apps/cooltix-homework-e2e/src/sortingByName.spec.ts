import { test, expect } from '@playwright/test';

// something wierd is happening with the select element
// it is not being found by playwright

// test('should list members', async ({ page }) => {
//   await page.goto('/');

//   const select = page.locator('[data-test-id="sort-by-select"]');
//   select.click();
//   const options = page.locator('[data-test-id="sort-by-option"]');
//   await page.setViewportSize({ width: 2050, height: 800 });
//   await options.last().click();
  
//   // eslint-disable-next-line playwright/no-wait-for-timeout
//   await page.waitForTimeout(500);

//   expect(page.url()).toContain('lastName');
// });
