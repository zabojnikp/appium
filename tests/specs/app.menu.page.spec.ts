import * as TrackingPage from '../pageobjects/tracking.page';
import * as IntroPage from '../pageobjects/intro.page';
import * as IntroRecipesPage from '../pageobjects/intro.recipes.page';
import * as LoginPage from '../pageobjects/login.page';
import * as PhoneNumberPage from '../pageobjects/phone.number.input.page';
import * as SmsCodePage from '../pageobjects/sms.code.page';

describe('Menu page', () => {
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

    it('Menu open check', async () => {
        //Menu page
        const MenuScreenPage = '//android.view.View[@resource-id="profileScreenTab"]';
        const MenuPage = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup';
        await $(MenuScreenPage).click();
        await expect($(MenuPage)).toExist;
    });
});