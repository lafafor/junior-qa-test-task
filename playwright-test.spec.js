const { test, expect } = require('@playwright/test');

test('Заголовок страницы Playwright содержит ожидаемый текст', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = await page.title();
  expect(title).toContain('Playwright');
});
