import { Selector, t} from 'testcafe';

class FinishPage{
    constructor(){
        this.massage_complete_purchase = Selector(".complete-header");
    }

    async isCompletePurchaseMsgDisplayed(){
        return this.massage_complete_purchase.exists;
    }
}

export default new FinishPage();