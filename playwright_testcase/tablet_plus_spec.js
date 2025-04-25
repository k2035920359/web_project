// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://192.168.10.149/#/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/airaTablet plus/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://192.168.10.149/#/');

  // Click the get login.
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');

  await expect(page.getByRole('group').filter({ hasText: 'English 繁體中文 日本語 español Fran' })).toBeVisible();

  await page.locator('label span').click();
  
  // Expects page to have texts.
  await expect(page.locator('footer')).toBeVisible();
  await expect(page.getByText('版號 : v1.00.13 (build 010301) /')).toBeVisible();


  await page.getByText('Login').nth(1).click();

});


test('get face board', async ({ page }) => {


    
});    