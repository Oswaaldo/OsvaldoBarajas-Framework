import { Selector, t} from 'testcafe';

class ProductsPage{
    constructor(){
        this.label_products = Selector(".product_label");
        this.button_AddToCartSauceLabsBackpack = Selector(".pricebar > button").withExactText("ADD TO CART").nth(0);
        this.buttons_AddToCard = Selector(".btn_inventory");
    }

    async isProductsPageLoaded(){
        return this.label_products.exists;
    }

    async addToCartSauceLabsBackpack(){
        await t.click(this.button_AddToCartSauceLabsBackpack);
    }

    async addAllProductsToCard(){
        const addBtnsCount = await this.buttons_AddToCard.count;
        for(let i = 0; i < addBtnsCount; i++){
            await t.click(this.buttons_AddToCard.nth(i));
        }
    }
}

export default new ProductsPage();