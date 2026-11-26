
import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/home-page';

test('search returns products matching pliers', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();

  await homePage.searchFor('pliers');

  await expect(homePage.productNames).toHaveCount(4);

  const names = await homePage.productNames.allInnerTexts();

  for (const name of names) {
    expect(name.toLowerCase()).toContain('pliers');
  }
});
