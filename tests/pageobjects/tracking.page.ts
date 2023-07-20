import Page from './page';

const HEADER = 'Pomozte nám zlepšit aplikaci Můj Albert';
const MORE_INFO = 'Více informací o trackování';
const MANDATORY = 'Nezbytně nutné';
const ANALYTICS = 'Analytika a statistika';
const MARKETING = 'Marketing a přízpůsobení obsahu';
const ACCEPT_ALL = 'Přijmout vše';
const ACCEPT_SELECTED = 'Přijmout zvolené';

class TrackingPage {

    async getTextViewElement (elementText: string) {
        return await $(`android=new UiSelector().text("${elementText}").className("android.widget.TextView")`);
    }

    async assertTrackingPageDisplayed () {
        await Page.assertTextViewDisplayed(HEADER);
        await Page.assertTextViewDisplayed(MORE_INFO);
        await Page.assertTextViewDisplayed(MANDATORY);
        await Page.assertTextViewDisplayed(ANALYTICS);
        await Page.assertTextViewDisplayed(MARKETING);
        await Page.assertTextViewDisplayed(ACCEPT_ALL);
        await Page.assertTextViewDisplayed(ACCEPT_SELECTED);
    }

    async acceptAllTracking () {
        (await this.getTextViewElement(ACCEPT_ALL)).click();
    }

    async acceptSelectedTracking () {
        (await this.getTextViewElement(ACCEPT_SELECTED)).click();
    }
}

export default new TrackingPage();
