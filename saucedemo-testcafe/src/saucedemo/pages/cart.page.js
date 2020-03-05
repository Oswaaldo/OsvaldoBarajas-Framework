import { Selector, t} from 'testcafe';

class CartPage{
    constructor(){
        this.label_your_cart = Selector(".subheader").withExactText('Your Cart');
        this.products = Selector(".inventory_item_name");
        this.button_checkout = Selector(".checkout_button");
    }

    async isYourCartLabelDisplayed(){
        return this.label_your_cart.exists;
    }

    async isExpectedProductDisplayed(product){
        return Selector(".inventory_item_name").withExactText(product).exists;
    }

    async areProductsDisplayed(){
        return this.products.count;
    }

    async navigateToCheckoutPage(){
        await t.click(this.button_checkout);
    }
}

export default new CartPage();