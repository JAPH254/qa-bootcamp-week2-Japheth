import { test, expect } from '@playwright/test';

test('invalid login is rejected', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  await page.getByRole('link', { name: 'Sign in' }).click();

  await page.getByLabel('Email address').fill('wrong@example.com');
  await page.locator('[data-test="password"]').fill('WrongPassword123!');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(
    page.getByText('Invalid email or password')
  ).toBeVisible();
});