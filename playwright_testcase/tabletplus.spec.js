// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://192.168.10.149/#/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/airaTablet plus/);
});

test('get started link', async ({ page }) => {
  await page.goto('http://192.168.10.149/#/login');
});

test('login page box', async ({ page }) => {
  await page.waitForLoadState();

  //await page.getByPlaceholder('Username').click();
  await page.getByRole('textbox', { name: 'text' }).waitFor({ state: 'visible' });
  await page.getByRole('textbox', { name: 'text' }).fill('Admin');
  
  //await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').waitFor({ state: 'visible' });
  await page.getByPlaceholder('Password').fill('123456');

  await expect(page.getByRole('group').filter({ hasText: 'English 繁體中文 日本語 español Fran' })).toBeVisible();
  await page.getByRole('group').filter({ hasText: 'English 繁體中文 日本語 español Fran' }).getByRole('combobox').selectOption('en');
  await expect(page.getByRole('group').filter({ hasText: 'Setup Mode Welcome Board' })).toBeVisible();
  await page.getByRole('group').filter({ hasText: 'Setup Mode Welcome Board' }).getByRole('combobox').selectOption('Setting');


  await page.locator('label span').click();
  // Expects page to have version.
  await page.waitForSelector('footer', { state: 'visible' });
  await expect(page.locator('footer')).toBeVisible();
  await expect(page.getByText(' v')).toBeVisible();
  
});


// Expects to login
test('login', async ({ page }) => {
  test.setTimeout(60000);
  await page.getByRole('button').click();
  
});


// Expects page to have face
test('get face board', async ({ page }) => {
  const context = page.context();
  const pagePromise = context.waitForEvent('page');
  const newPage = await pagePromise;
  await expect(newPage.getByRole('main').filter({ hasText: '日出勤全部 :  正常 :  遲到 : ' })).toBeVisible();




    
});    