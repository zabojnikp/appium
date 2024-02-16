import * as TrackingPage from '../pageobjects/tracking.page';
import * as IntroPage from '../pageobjects/intro.page';
import * as IntroRecipesPage from '../pageobjects/intro.recipes.page';
import * as LoginPage from '../pageobjects/login.page';
import * as PhoneNumberPage from '../pageobjects/phone.number.input.page';
import * as SmsCodePage from '../pageobjects/sms.code.page';

describe('Recipes', () => {
    before(async () => {

        await TrackingPage.clickAcceptAllButton();
        await IntroPage.clickSkipButton();
        await IntroRecipesPage.clickLoginButton();
        await LoginPage.clickLoginButton();
        await PhoneNumberPage.checkAndInsertPhoneNumber();
        await PhoneNumberPage.checkLoginLegalCheckBox();
        await PhoneNumberPage.checkAndSubmitLoginButton();
        await SmsCodePage.inputSmsCode();
    });

    it('RecipesPage open check', async () => {
        //RecipesPage
        const RecipesButton = '//android.view.View[@resource-id="recipesScreenTab"]';
        const RecipesPage = '//android.widget.FrameLayout[@resource-id="android:id/content"]';
        //Navrat na HP pomoci tlacitka Nabidka v dolni liste
        const offerScreenTab = '//android.view.View[@resource-id="offerScreenTab"]';

        await $(RecipesButton).click();
        await expect($(RecipesPage)).toExist;
        await $(offerScreenTab).click();
    });
});