import * as TrackingPage from '../pageobjects/tracking.page';
import * as IntroPage from '../pageobjects/intro.page';
import * as IntroRecipesPage from '../pageobjects/intro.recipes.page';
import * as LoginPage from '../pageobjects/login.page';

describe('Use app without account', () => {
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

    it('open Login page and continue without account', async () => {
        await LoginPage.assertPageLoaded();
        await LoginPage.clickLoginWithoutAccountButton();
    });

    it('continue with Guest Mode, accept Terms and Conditions and continue', async () => {
        await LoginPage.assertGuestModePageLoaded();
        await LoginPage.clickOnCheckBox();
        await LoginPage.clickOnContinueButton();

        // //GuestModeLoginPage
        // const titleGuestLoginPage = '//android.view.ViewGroup[@resource-id="ForkScreen"]/android.view.ViewGroup[2]/android.widget.TextView';
        // const GuestModeCheckBox = '//android.view.ViewGroup[@resource-id="ForkScreen"]/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup';
        // const ContinueButton = '//android.view.ViewGroup[@resource-id="ForkScreen"]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.TextView';
        // // assertGuestPageLoaded - TODO: find how to 
        // await expect($(titleGuestLoginPage)).toExist();
        // await expect($(titleGuestLoginPage)).toHaveTextContaining('pokračovat bez účtu');

        // // clickToCheckBox
        // await expect($(GuestModeCheckBox)).toExist();
        // await $(GuestModeCheckBox).click();

        // //ClickToContinueButton
        // await expect($(ContinueButton)).toHaveTextContaining('Pokračovat');
        // await $(ContinueButton).click();
    });
    
    it('open Location Permission page and continue without allowing it', async () => {
        //PermissionControllerExist
        const PermissionController = '//android.widget.LinearLayout[@resource-id="com.android.permissioncontroller:id/grant_dialog"]';
        await expect($(PermissionController)).toExist();

        //ForegroundOnlyButton
        //const ForegroundOnlyButton = '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]';
        //ClickToForegroundButton  While using the app
        //await expect($(ForegroundOnlyButton)).toHaveTextContaining('While using the app');
        //await $(ForegroundOnlyButton).click();

        //PermissionDenyButton
        const PermissionDenyButton = '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]';
        //ClickToForegroundButton  While using the app
        await expect($(PermissionDenyButton)).toHaveTextContaining('Don’t allow');
        await $(PermissionDenyButton).click();
    });

    it('open Store Selection page and choose first one', async () => {
        //StorePickerSelectionPage
        const StorePickerSelection = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[1]';
        const StorePickerSelectorButton ='//android.view.ViewGroup[@resource-id="storeSelector"]/android.widget.TextView[1]';
        // StorePickerSelectionExistingAndClickToButton
        await expect($(StorePickerSelection)).toHaveTextContaining('Do které prodejny Albert chodíte');
        await expect($(StorePickerSelectorButton)).toHaveTextContaining('Vyberte prodejnu');
        await $(StorePickerSelectorButton).click();

        //PermissionPopUp
        const PermissionPopUp = '//android.widget.FrameLayout[@resource-id="android:id/content"]';
        await expect($(PermissionPopUp)).toExist();

        //DontAskAgainButton
        const DontAskAgainButton = '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_and_dont_ask_again_button"]';
        //ClickToDontAskAgainButton 
        await expect($(DontAskAgainButton)).toHaveTextContaining('Don’t allow');
        await $(DontAskAgainButton).click();

        //ScrollStoresToExist
       const ScrollStoresToExist ='/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.ScrollView';
       await expect($(ScrollStoresToExist)).toExist();

        //FirstStorePickerSelect
       const FirstStorePickerSelect ='/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup';
        await $(FirstStorePickerSelect).click();

        //StoreSelectorPopUp
        const StoreSelectorPopUp ='/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup';
        await expect($(StoreSelectorPopUp)).toExist();

        //SelectStoreButton
        const SelectStoreButton = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[3]';
        //ClickToSelectStoreButton 
        await $(SelectStoreButton).click();
    });

    it('open Home page and check if main content exist', async () => {
        //HomePageContentExisting
        const HomePageContentExisting ='/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout';
        await expect($(HomePageContentExisting)).toExist();

        //StoreSelectorExisting
        const StoreSelectorExisting ='/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup';
        await expect($(StoreSelectorExisting)).toExist();

        //OfferScreenTabExist
        const OfferScreenTabExist ='/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.View';
        await expect($(OfferScreenTabExist)).toExist();
    });

    it('click card tab and check for registration prompt', async () => {
        //CardScreenTab
        const CardScreenTab ='/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.View/android.view.View[3]';
        //CardScreenTabTextExist
        const CardScreenTabTextExist ='/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.View/android.view.View[3]/android.widget.TextView';
        //CardScreenTabClick
        const CardScreenTabClick ='/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.View/android.view.View[3]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ImageView';
        
        await expect($(CardScreenTab)).toExist();
        await expect($(CardScreenTabTextExist)).toExist();
        await $(CardScreenTabClick).click();

        //LoginPageContent 
        const LoginPageContent = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout';
        const NarrativeScreenCard = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView';
        const SignInButton = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.widget.TextView';
        
        await expect($(LoginPageContent)).toExist;
        await expect($(NarrativeScreenCard)).toHaveTextContaining('SBÍREJTE KREDITY');
        await expect($(SignInButton)).toHaveTextContaining('Registrovat se');
        await $(SignInButton).click();
    });


    it('open Registration page and chekc for phone number input', async () => {
        //PhoneNumberScreenExist
        const PhoneNumberScreenExist ='/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup';
        //PhoneInput - existuje class ale neumi spravne pouzit v const 
        const PhoneInput = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText';
        await expect($(PhoneNumberScreenExist)).toExist;
        await expect($(PhoneInput)).toHaveTextContaining('Telefonní číslo');
    });

});
