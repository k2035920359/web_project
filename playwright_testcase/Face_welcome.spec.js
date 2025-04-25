// @ts-check
import { test, expect } from '@playwright/test';



test.beforeEach('get started link', async ({ page }) => {
    const baseUrl = 'http://192.168.10.86/#/login';
    const username = 'Admin';
    const password = '123456';

    // Navigate to the base URL
    await page.goto(baseUrl);
    await expect(page).toHaveTitle(/airaFace 2/);

    // Select language
    await page.getByRole('group')
        .filter({ hasText: 'English 繁體中文 日本語 español Fran' })
        .getByRole('combobox')
        .selectOption('en');

    // Select setup mode
    await page.getByRole('group')
        .filter({ hasText: 'Setup Mode Welcome Board' })
        .getByRole('combobox')
        .selectOption('Welcome');

    // Select setting option
    //await page.locator('form div:nth-child(3) select').selectOption('Setting');

    // Fill in login credentials
    await page.getByRole('textbox', { name: 'Username' }).fill(username);
    await page.getByRole('textbox', { name: 'Password' }).fill(password);

    // Click the login checkbox and login button
    await page.locator('label span').click();
    await page.getByRole('button', { name: 'Login' }).click();
});

