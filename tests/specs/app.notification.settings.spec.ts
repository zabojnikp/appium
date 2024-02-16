import * as TrackingPage from '../pageobjects/tracking.page';
import * as IntroPage from '../pageobjects/intro.page';
import * as IntroRecipesPage from '../pageobjects/intro.recipes.page';
import * as LoginPage from '../pageobjects/login.page';
import * as PhoneNumberPage from '../pageobjects/phone.number.input.page';
import * as SmsCodePage from '../pageobjects/sms.code.page';

describe('Notification settings', () => {
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

    it('NotificationSettingsOffOn open check', async () => {
        //NotificationSettingsOffOn
        const notificationsSettingsMenuItem = '//android.view.ViewGroup[@resource-id="notificationsSettingsMenuItem"]';
        const leafletNotificationsSwitch = '//android.widget.Switch[@resource-id="leafletNotificationsSwitch"]';
        const creditNotificationsSwitch = '//android.widget.Switch[@resource-id="creditNotificationsSwitch"]';
        const householdNotificationsSwitch = '//android.widget.Switch[@resource-id="householdNotificationsSwitch"]';
        const achievementNotificationsSwitch = '//android.widget.Switch[@resource-id="achievementNotificationsSwitch"]';
        const magazineNotificationsSwitch = '//android.widget.Switch[@resource-id="magazineNotificationsSwitch"]';
        const surveysNotificationsSwitch = '//android.widget.Switch[@resource-id="surveysNotificationsSwitch"]';
        const emailNotificationsAllowSwitch = '//android.widget.Switch[@resource-id="emailNotificationsAllowSwitch"]';
        const smsNotificationsSwitch = '//android.widget.Switch[@resource-id="smsNotificationsSwitch"]';
        const notificationsSaveButton = ('~notificationsSave');


        await $(notificationsSettingsMenuItem).click();
        await $(leafletNotificationsSwitch).click();
        await $(creditNotificationsSwitch).click();
        await $(householdNotificationsSwitch).click();
        await $(achievementNotificationsSwitch).click();
        await $(magazineNotificationsSwitch).click();
        await $(surveysNotificationsSwitch).click();
        await $(emailNotificationsAllowSwitch).click();
        await $(smsNotificationsSwitch).click();
        await $(notificationsSaveButton).click();
        await $(notificationsSettingsMenuItem).click();

        await $(leafletNotificationsSwitch).click();
        await $(creditNotificationsSwitch).click();
        await $(householdNotificationsSwitch).click();
        await $(achievementNotificationsSwitch).click();
        await $(magazineNotificationsSwitch).click();
        await $(surveysNotificationsSwitch).click();
        await $(emailNotificationsAllowSwitch).click();
        await $(smsNotificationsSwitch).click();
        await $(notificationsSaveButton).click();
    });
});