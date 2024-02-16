import * as TrackingPage from '../pageobjects/tracking.page';
import * as IntroPage from '../pageobjects/intro.page';
import * as IntroRecipesPage from '../pageobjects/intro.recipes.page';
import * as LoginPage from '../pageobjects/login.page';
import * as PhoneNumberPage from '../pageobjects/phone.number.input.page';
import * as SmsCodePage from '../pageobjects/sms.code.page';

describe('Legal info', () => {
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

    it('legalsMenuItem open check', async () => {
        //legalsMenuItem
        const legalsMenuItem = '//android.view.ViewGroup[@resource-id="legalsMenuItem"]';
        const legalsMenuPageName = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.View';
        const GDPRButtonName = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView[1]';
        const TrackingConsentName = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[1]';
        const legalsMenuBackButton = ('~Menu, back'); 
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Právní informace")');
        await browser.pause(1000);
        await $(legalsMenuItem).click();
        await expect($(legalsMenuPageName)).toHaveTextContaining('Právní informace');
        await expect($(GDPRButtonName)).toHaveTextContaining('Souhlas se');
        await expect($(TrackingConsentName)).toHaveTextContaining('Souhlas s použitím trackingu');
        await $(legalsMenuBackButton).click();
    });
});