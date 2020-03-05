import { Selector, t} from 'testcafe';

class LeftSidebarPage{
    constructor(){
        this.link_logout = Selector("#logout_sidebar_link");
        this.button_left_container = Selector(".bm-burger-button > button");
    }

    async logout(){
        await t.click(this.button_left_container)
                .click(this.link_logout);
    }
}

export default new LeftSidebarPage();