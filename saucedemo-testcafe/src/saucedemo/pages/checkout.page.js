import { Selector, t} from 'testcafe';

class CheckoutPage{
    constructor(){
        this.field_name = Selector("#first-name");
        this.field_last_name = Selector("#last-name");
        this.field_zip = Selector("#postal-code");
        this.button_continue = Selector(".cart_button");
        this.alert_error = Selector("h3[data-test='error'] > .error-button");
    }

    async navigateToOverviewPage(){
        await t.click(this.button_continue);
    }

    async isErrorAlertDisplayed(){
        return this.alert_error.exists;
    }

    async enterUserInfo(firstName, lastName, zip){
        await t.typeText(this.field_name, firstName)
                .typeText(this.field_last_name, lastName)
                .typeText(this.field_zip, zip);
    }
}

export default new CheckoutPage();