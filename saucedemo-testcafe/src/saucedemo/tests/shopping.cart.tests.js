import LoginPage from "../pages/login.page";
import HeaderPage from "../pages/header.page";
import CartPage from "../pages/cart.page";
import ProductsPage from '../pages/products.page';
import CheckoutPage from '../pages/checkout.page';
import OverviewPage from '../pages/overview.page';
import FinishPage from '../pages/finish.page';
import dataProvider from '../data/dataProvider.json';

//Data Variables

const BASE_URL = dataProvider.base_url;
const VALID_USERNAME = dataProvider.valid_username;
const VALID_PASSWORD = dataProvider.valid_password;
const PRODUCT = dataProvider.product;
const FIRST_NAME = dataProvider.first_name;
const LAST_NAME = dataProvider.last_name;
const ZIP = dataProvider.zip;
const QUANTITY = parseInt(dataProvider.products_quantity);


fixture('Shopping cart tests').page(BASE_URL)
    .beforeEach( async login => {
        await LoginPage.login(VALID_USERNAME, VALID_PASSWORD)
    });

/*
Navigate to the shopping cart
Expected: Validate user navigates to the shopping cart page.
*/
test('Navigate to the shopping cart', async t => {
    await HeaderPage.clickOnCartLink();
    await t.expect(await CartPage.isYourCartLabelDisplayed()).ok();
});

/*
Add a single item to the shopping cart
Expected: Validate the item has been added to the shopping cart.
*/
test('Add a single item to the shopping cart', async t =>{
    await ProductsPage.addToCartSauceLabsBackpack();
    await HeaderPage.clickOnCartLink();
    await t.expect(await CartPage.isExpectedProductDisplayed(PRODUCT)).ok();
});

/*
Add multiple items to the shopping cart
Expected: Validate all the items have been added to the shopping cart.
*/
test('Add multiple items to the shopping cart', async t =>{
    await ProductsPage.addAllProductsToCard();
    await HeaderPage.clickOnCartLink();
    await t.expect(await CartPage.areProductsDisplayed()).eql(QUANTITY);
});

/*
Continue with missing mail information
Expected: Validate error message is displayed in the user’s information page.
*/
test('Continue with missing mail information', async t => {
    await ProductsPage.addAllProductsToCard();
    await HeaderPage.clickOnCartLink();
    await t.expect(await CartPage.areProductsDisplayed()).eql(QUANTITY);
    await CartPage.navigateToCheckoutPage();
    await CheckoutPage.navigateToOverviewPage();
    await t.expect(await CheckoutPage.isErrorAlertDisplayed()).ok();
});

/*
Fill user’s information
Expected: Validate the user navigates to the overview page once the his data has been filled.
*/
test('Fill user’s information', async t => {
    await ProductsPage.addAllProductsToCard();
    await HeaderPage.clickOnCartLink();
    await CartPage.navigateToCheckoutPage();
    await CheckoutPage.enterUserInfo(FIRST_NAME, LAST_NAME, ZIP);
    await CheckoutPage.navigateToOverviewPage();
    await t.expect(await OverviewPage.isOverviewLabelDisplayed()).ok();
});

/*
Final order items 
Expected: Validate items in the overview page match with the added items.
*/
test('Final order items ', async t => {
    await ProductsPage.addToCartSauceLabsBackpack();
    await HeaderPage.clickOnCartLink();
    await CartPage.navigateToCheckoutPage();
    await CheckoutPage.enterUserInfo(FIRST_NAME, LAST_NAME, ZIP);
    await CheckoutPage.navigateToOverviewPage();
    await t.expect(await OverviewPage.isExpectedProductDisplayed(PRODUCT)).ok();
});

/*
Complete a purchase
Expected: Validate the user navigates to the confirmation page.
*/
test('Complete a purchase', async t => {
    await ProductsPage.addToCartSauceLabsBackpack();
    await HeaderPage.clickOnCartLink();
    await CartPage.navigateToCheckoutPage();
    await CheckoutPage.enterUserInfo(FIRST_NAME, LAST_NAME, ZIP);
    await CheckoutPage.navigateToOverviewPage();
    await OverviewPage.finishPurchase();
    await t.expect(await FinishPage.isCompletePurchaseMsgDisplayed()).ok();
});