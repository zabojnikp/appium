import Page from './page';
import Gestures from '../helpers/gestures';

const SKIP = 'Přeskočit';
const HEADER = 'S APLIKACÍ MŮJ ALBERT UŠETŘÍTE VŽDY NEJVÍC';
const LOGIN = 'Přihlásit se';

class IntroPage  {

    async assertIntroPageDisplayed () {
        await Page.assertTextViewDisplayed(SKIP);
        await Page.assertTextViewDisplayed(HEADER);
    }

    async swipeRight () {
        await Gestures.swipeRight();
    }

    async assertNextCardDisplayed (text: string) {
        await Page.assertTextViewDisplayed(text);

    }

    async selectSkipButton () {
        (await Page.getTextViewElement(SKIP)).click();
    }

    async assertLoginButtonDisplayed () {
        (await Page.assertTextViewDisplayed(LOGIN));
    }

    async clickLoginButton () {
        (await Page.getTextViewElement(LOGIN)).click();
    }
}

export default new IntroPage();
