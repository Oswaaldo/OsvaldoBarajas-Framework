import LoginPage from '../pages/login.page';
import ProductsPage from '../pages/products.page';
import LeftSidebarPage from '../pages/left.sidebar.page';
import dataProvider from '../data/dataProvider.json';

//Data Variables

const BASE_URL = dataProvider.base_url;
const VALID_USERNAME = dataProvider.valid_username;
const VALID_PASSWORD = dataProvider.valid_password;
const INVALID_USERNAME = dataProvider.invalid_userusername;
const INVALID_PASSWORD = dataProvider.invalid_password;

fixture('Login tests').page(BASE_URL);

/*
Login with a valid user
Expected: Validate user navigates to the product’s page.
*/
test('Login with a valid user', async t => {
    await LoginPage.login(VALID_USERNAME, VALID_PASSWORD);
    await t.expect(await ProductsPage.isProductsPageLoaded()).ok();
});

/*
Login with an invialid user
Expected: Validate error message is displayed.
*/
test('Login with an invialid user', async t => {
    await LoginPage.login(INVALID_USERNAME, INVALID_PASSWORD);
    await t.expect(await LoginPage.isErrorMessageDisplayed()).ok();
});

/*
Logout from product’s page
Expected: Validate user navigates to the login page.
*/
test('Logout from product’s page', async t => {
    await LoginPage.login(VALID_USERNAME, VALID_PASSWORD);
    await LeftSidebarPage.logout();
    await t.expect(await LoginPage.isLoginButtonDisplayed()).ok()
            .expect(await ProductsPage.isProductsPageLoaded()).notOk();
});