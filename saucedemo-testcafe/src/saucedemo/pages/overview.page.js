import { Selector, t} from 'testcafe';

class OverviewPage{
    constructor(){
        this.label_overview = Selector(".subheader").withExactText("Checkout: Overview"); 
        this.button_finish = Selector(".cart_button");
    }

    async isOverviewLabelDisplayed(){
        return this.label_overview.exists;
    }

    async isExpectedProductDisplayed(product){
        return Selector(".inventory_item_name").withExactText(product).exists;
    }

    async finishPurchase(){
        await t.click(this.button_finish);
    }
}

export default new OverviewPage();