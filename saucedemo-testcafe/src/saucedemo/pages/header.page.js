import { Selector, t} from 'testcafe';

class HeaderPage{
    constructor(){
        this.link_cart = Selector("[href='./cart.html']");
    }

    async clickOnCartLink(){
        await t.click(this.link_cart);
    }
}

export default new HeaderPage();