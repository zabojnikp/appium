import * as TrackingPage from '../pageobjects/tracking.page';
import * as IntroPage from '../pageobjects/intro.page';
import * as IntroRecipesPage from '../pageobjects/intro.recipes.page';
import * as LoginPage from '../pageobjects/login.page';
import * as PhoneNumberPage from '../pageobjects/phone.number.input.page';
import * as SmsCodePage from '../pageobjects/sms.code.page';
describe('Login with existing user', () => {
    it('open Tracking page and Accept all', async () => {
        await TrackingPage.assertPageLoaded();
        await TrackingPage.clickAcceptAllButton();
    });

    it('open Intro page and skip it', async () => {
        await IntroPage.assertPageLoaded();
        await IntroPage.clickSkipButton();
    });

    it('open Intro Recipes page and continue to login page', async () => {
        await IntroRecipesPage.assertPageLoaded();
        await IntroRecipesPage.clickLoginButton();
    });

    it('open Login page and click to login button', async () => {
        await LoginPage.assertPageLoaded();
        await LoginPage.assertLoginButtonText();
        await LoginPage.clickLoginButton();
    });

    it('phone number and sms code input', async () => {
        await PhoneNumberPage.assertPhoneNumberScreenExist();
        await PhoneNumberPage.checkAndInsertPhoneNumber();
        await PhoneNumberPage.checkLoginLegalCheckBox();
        await PhoneNumberPage.checkAndSubmitLoginButton();

        //VerificationCodeScreen
        await SmsCodePage.assertSmsPageLoaded();
        await SmsCodePage.inputSmsCode();
    });

    it('walletThumbnail check', async () => {
        //MainPage
        const WalletThumbNail = '//android.view.ViewGroup[@resource-id="walletThumbnail"]/android.view.ViewGroup/android.widget.TextView[2]';
        await expect($(WalletThumbNail)).toHaveTextContaining('Moje Peněženka');
    });
});