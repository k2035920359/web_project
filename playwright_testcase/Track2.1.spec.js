// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://192.168.10.62:8443/#/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Track 2/);
});


test.beforeEach('get started link', async ({ page }) => {
  await page.goto('https://192.168.10.62:8443/#/');

  await page.selectOption('select#⚙️AppInput__X__X2__X', 'en');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
    
  await page.getByText('Login').nth(1).click();

});


test('Dashboard is visible after login', async ({ page }) => {
  
  await expect(page.getByText('TargetInvestigationCase Admin')).toBeVisible();
  await expect(page.getByText('TimeNowCameraAllAlbumAll4/')).toBeVisible();
  //await expect(page.locator('#📁FullLayout__X')).to();
  //await page.locator('#📁FullLayout__X').screenshot({path: 'screenshot.png'}); //faceboard
  await expect(page.locator('#📁FullLayout__X').locator('#🔥FaceList')).toHaveScreenshot(); //faceboard
  // Expect contain albumn page.
  
  
  
});    

test('Albumn', async ({ page }) => {
  await page.locator('#🔥TargetNav').getByText('Album').click();
  await expect(page.locator('#📁ProgressBarLayout__X2').filter({ hasText: 'Face BoardAlbumUploadAlbum' })).toBeVisible();
  




}); 