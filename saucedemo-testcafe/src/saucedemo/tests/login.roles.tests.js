import LoginPage from '../pages/login.page';
import ProductsPage from '../pages/products.page';
import LeftSidebarPage from '../pages/left.sidebar.page';
import dataProvider from '../data/dataProvider.json';
import { Role } from 'testcafe';

//Data Variables

const BASE_URL = dataProvider.base_url;
const STANDARD_USER = dataProvider.standard;
const PROBLEM_USER = dataProvider.problem;
const PERFORMANCE_USER = dataProvider.performance;
const VALID_PASSWORD = dataProvider.valid_password;

const standardUser = Role(BASE_URL, async t => {
    await LoginPage.login(STANDARD_USER, VALID_PASSWORD);
}, { preserveUrl: true });

const problemUser = Role(BASE_URL, async t => {
    await LoginPage.login(PROBLEM_USER, VALID_PASSWORD);
}, { preserveUrl: true });

const performanceUser = Role(BASE_URL, async t => {
    await LoginPage.login(PERFORMANCE_USER, VALID_PASSWORD);
}, { preserveUrl: true });

fixture('Login Roles tests');

/*
Login with a standard user
Expected: Validate user navigates to the product’s page.
*/
test('Login with a standard user', async t => {
    await t.useRole(standardUser);
    await t.expect(await ProductsPage.isProductsPageLoaded()).ok();
});

/*
Login with a problem user
Expected: Validate user navigates to the product’s page.
*/
test('Login with a problem user', async t => {
    await t.useRole(problemUser);
    await t.expect(await ProductsPage.isProductsPageLoaded()).ok();
});

/*
Login with a performance glitch user
Expected: Validate user navigates to the product’s page.
*/
test('Login with a performance glitch user', async t => {
    await t.useRole(performanceUser);
    await t.expect(await ProductsPage.isProductsPageLoaded()).ok();
});