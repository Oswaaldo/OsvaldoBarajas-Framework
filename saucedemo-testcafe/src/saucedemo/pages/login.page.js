import { Selector, t} from 'testcafe';

class LoginPage{
    constructor(){
        this.field_username = Selector("#user-name");
        this.field_password = Selector("#password");
        this.button_login = Selector(".btn_action");
        this.message_error = Selector("[data-test='error'] > .error-button"); 
    }

    async login(username, password){
        await t.typeText(this.field_username, username)
                .typeText(this.field_password, password)
                .click(this.button_login);
    }

    async isErrorMessageDisplayed(){
        return this.message_error.exists;
    }

    async isLoginButtonDisplayed(){
        return this.button_login.exists;
    }

}

export default new LoginPage();