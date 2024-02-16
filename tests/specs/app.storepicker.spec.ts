import * as TrackingPage from '../pageobjects/tracking.page';
import * as IntroPage from '../pageobjects/intro.page';
import * as IntroRecipesPage from '../pageobjects/intro.recipes.page';
import * as LoginPage from '../pageobjects/login.page';
import * as PhoneNumberPage from '../pageobjects/phone.number.input.page';
import * as SmsCodePage from '../pageobjects/sms.code.page';

describe('Storepicker', () => {
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

    it('storeSelector open check', async () => {
        //storeSelector
        //const storeSelector = '//android.view.ViewGroup[@resource-id="barcodeHorizontal"]';
    });
});
