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
        .selectOption('Setup Mode');

    // Select setting option
    //await page.locator('form div:nth-child(3) select').selectOption('Setting');

    // Fill in login credentials
    await page.getByRole('textbox', { name: 'Username' }).fill(username);
    await page.getByRole('textbox', { name: 'Password' }).fill(password);

    // Click the login checkbox and login button
    await page.locator('label span').click();
    await page.getByRole('button', { name: 'Login' }).click();
});


test('Attand', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    await page.getByText('Attendance', { exact: true }).click();
    await page.getByRole('link', { name: 'Daily Report' }).click();
    await page.getByText('Daily Report All Person : 25').click();
    await page.getByRole('link', { name: 'Monthly Report' }).click();
    await page.locator('.card-body').click();
    await page.getByRole('link', { name: 'Attendance Settings' }).click();
    await page.getByRole('main').locator('div').filter({ hasText: 'Clock In Clock Out Devices' }).nth(3).click();
    await page.getByRole('link', { name: 'Attendance Operations' }).click();
    await page.getByRole('main').click();

});

test('Report', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    await page.getByText('Reports').click();
    await page.getByRole('link', { name: 'Person Report' }).click();
    await page.locator('div').filter({ hasText: 'Person Report Search Export' }).nth(3).click();
    await page.getByRole('link', { name: 'Visitor Report' }).click();

  
    
    await page.getByText('Investigation').click();
    await page.locator('div').filter({ hasText: 'Investigation Date Time' }).nth(3).click();

    // Step 2: 點擊側邊欄的 Investigation 連結
    await page.locator('a.c-sidebar-nav-link', { hasText: 'Investigation' }).click();

    // Step 3: 等待 Investigation 頁面成功載入
    // 請根據實際頁面內容，替換下方這個元素定位條件
    await expect(page.locator('text=Total ')).toBeVisible();

    // Step 4: 取得分頁元件
    const pagerWrapper = page.locator('.vxe-pager--wrapper');
    await expect(pagerWrapper).toBeVisible();

    // 驗證目前為第1頁
    const activePage = pagerWrapper.locator('.vxe-pager--num-btn.is--active');
    await expect(activePage).toHaveText('1');

    // 點選第3頁
    const page3Btn = pagerWrapper.locator('.vxe-pager--num-btn', { hasText: '3' });
    await page3Btn.click();
    await expect(pagerWrapper.locator('.vxe-pager--num-btn.is--active')).toHaveText('3');

    // 點擊下一頁
    const nextPageBtn = pagerWrapper.locator('.vxe-pager--next-btn:not(.is--disabled)');
    await nextPageBtn.click();
    await expect(pagerWrapper.locator('.vxe-pager--num-btn.is--active')).toHaveText('4');

    // 跳轉至第5頁
    const gotoInput = pagerWrapper.locator('.vxe-pager--goto .vxe-input--inner');
    await gotoInput.fill('5');
    await gotoInput.press('Enter');
    await expect(pagerWrapper.locator('.vxe-pager--num-btn.is--active')).toHaveText('5');
});



test('person', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    await page.getByText('Person', { exact: true }).first().click();
    await page.getByRole('link', { name: 'Person', exact: true }).click();
    await page.getByRole('link', { name: 'Visitor', exact: true }).click();
    await page.getByRole('link', { name: 'Group', exact: true }).click();
    
});


test('video device', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    await page.getByText('Video Devices').click();
    
});

test('Events', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    await page.getByText('Events').click();
    await page.getByRole('link', { name: 'Event Management' }).click();
});

test('Boards', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    await page.getByText('Boards').click();
    await page.getByRole('link', { name: 'Welcome Board' }).click();
    await page.getByRole('link', { name: 'Attendance Board' }).click();
    await page.getByRole('link', { name: 'Occupancy Board' }).click();
    await page.getByRole('link', { name: 'Security Mode' }).click();
    await page.getByRole('link', { name: 'Visitor Registration' }).click();
});

test('Settings', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    await page.getByText('System Settings').click();
    await page.getByRole('link', { name: 'General Settings' }).click();
    await page.getByRole('link', { name: 'Account Management' }).click();
    await page.getByRole('link', { name: 'Backup & Restore' }).click();
    await page.getByRole('link', { name: 'Upgrade Software' }).click();
    await page.getByRole('link', { name: 'Factory Default' }).click();
    await page.getByRole('link', { name: 'License' }).click();
    await page.getByRole('link', { name: 'System Log' }).click();
    await expect(page.getByText('System Log Search')).toBeVisible();
});