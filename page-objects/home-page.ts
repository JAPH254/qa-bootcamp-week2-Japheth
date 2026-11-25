
import { type Page, type Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly productNames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.locator('[data-test="search-query"]');
    this.productNames = page.locator('[data-test="product-name"]');
  }

  async goto() {
    await this.page.goto('https://practicesoftwaretesting.com/');
  }

  async searchFor(product: string) {
    await this.searchBox.fill(product);
    await this.searchBox.press('Enter');
  }
}
