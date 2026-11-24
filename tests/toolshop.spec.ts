
import { test, expect } from '@playwright/test';

test('homepage loads successfully', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  await expect(page).toHaveTitle(/Practice Software Testing/);
});

test('search returns products matching pliers', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  const searchBox = page.locator('[data-test="search-query"]');

  await searchBox.fill('pliers');
  await searchBox.press('Enter');

  const productNames = page.locator('[data-test="product-name"]');

  await expect(productNames).toHaveCount(4);

  const names = await productNames.allInnerTexts();

  for (const name of names) {
    expect(name.toLowerCase()).toContain('pliers');
  }
});
