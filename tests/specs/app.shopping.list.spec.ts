import * as TrackingPage from '../pageobjects/tracking.page';
import * as IntroPage from '../pageobjects/intro.page';
import * as IntroRecipesPage from '../pageobjects/intro.recipes.page';
import * as LoginPage from '../pageobjects/login.page';
import * as PhoneNumberPage from '../pageobjects/phone.number.input.page';
import * as SmsCodePage from '../pageobjects/sms.code.page';

describe('Shopping list', () => {
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

    it('ShoppingListPage open check', async () => {
        //ShoppingListPage
        const shoppingListScreenTab = '//android.view.View[@resource-id="shoppingListScreenTab"]';
        const ShoppingListButtonText = '//android.view.ViewGroup[@content-desc="addShoppingListItemButton"]/android.widget.TextView[2]';
        const ShoppingListItemButton = ('~addShoppingListItemButton'); 
        const shoppingListInputText = 'android.widget.EditText';
        const SearchResultList = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup';
        const ItemSearchResult = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView';
        const ShoppingListSingleItem = '//android.view.ViewGroup[@content-desc="addShoppingListItemButton"]/android.widget.TextView[2]';
        const amountEditButton = '//android.view.ViewGroup[@resource-id="amountEdit"]';
        const amountUp = '//android.view.ViewGroup[@resource-id="amountUp"]';
        const amountDown = '//android.view.ViewGroup[@resource-id="amountDown"]';

        await $(shoppingListScreenTab).click();
        await expect($(ShoppingListButtonText)).toHaveTextContaining('Přidat položku');
        await $(ShoppingListItemButton).click();
        await browser.pause(1000);
        await expect($(shoppingListInputText)).toExist;
        await $(shoppingListInputText).click();
        await $(shoppingListInputText).setValue('Vejce');
        await expect($(SearchResultList)).toExist;
        await expect($(ItemSearchResult)).toExist;
        await $(ItemSearchResult).click();
        await expect($(ShoppingListSingleItem)).toExist;
        await $(amountEditButton).click();
        await $(amountUp).click();
        await $(amountUp).click();
        await $(amountUp).click();
        await $(amountUp).click();
        await $(amountDown).click();
        await $(amountDown).click();
        await $(amountDown).click();
        await $(amountDown).click();
        await $(amountDown).click();
    });
});