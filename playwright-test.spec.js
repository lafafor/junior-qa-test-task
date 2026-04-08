const { test, expect } = require('@playwright/test');

test('Проверка заголовка страницы Playwright', async ({ page }) => {
  // Открыть страницу
  await page.goto('https://playwright.dev/');
  
  // Получить заголовок страницы
  const title = await page.title();
  
  // Проверить, что заголовок содержит "Playwright"
  expect(title).toContain('Playwright');
  
 
});
