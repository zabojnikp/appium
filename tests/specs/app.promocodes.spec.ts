import * as TrackingPage from '../pageobjects/tracking.page';
import * as IntroPage from '../pageobjects/intro.page';
import * as IntroRecipesPage from '../pageobjects/intro.recipes.page';
import * as LoginPage from '../pageobjects/login.page';
import * as PhoneNumberPage from '../pageobjects/phone.number.input.page';
import * as SmsCodePage from '../pageobjects/sms.code.page';

describe('Promocodes', () => {
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

    it('promocodeMenuItem open check and used', async () => {
        //promocodeMenuItem
        const promocodeMenuItem = '//android.view.ViewGroup[@resource-id="promocodeMenuItem"]';
        const ApplyPromocodeText = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[1]';
        const Promocodefield = 'android.widget.EditText';
        const ApplyButton = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup';
        //Generate normal promocode for using 1999times and after change this code
        const BackButtonFalsePromocode = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup';
        const PromocodeBackButton = ('~Menu, back'); 
      
        await $(promocodeMenuItem).click();
        await expect($(ApplyPromocodeText)).toHaveTextContaining('Uplatněte váš promo kód');
        await expect($(Promocodefield)).toHaveTextContaining('promokód');
        await $(Promocodefield).click();
        await $(Promocodefield).setValue('VlozPromokod123');
        await $(ApplyButton).click();
        // Generate normal promocode for using 1999times and after change this code
        await $(BackButtonFalsePromocode).click();
        await $(PromocodeBackButton).click();
    });
});