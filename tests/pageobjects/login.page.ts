<<<<<<< Updated upstream
// import Page from './page';

// const INTRO = 'VÍTEJTE V APLIKACI MŮJ ALBERT';
//123
// const LOGIN = 'Přihlásit se';
// const USE_WITHOUT_ACCOUNT = 'Pokračovat bez účtu';
// const CREATE_NEW_ACCOUNT = 'Vytvořit nový účet';
// const PHONE_NUMBER = 'Vaše telefonní číslo';
// const CONTINUE_WITHOUT_ACCOUNT = 'Přejete si pokračovat bez účtu';

// class LoginPage  {

//     async assertLoginPageDisplayed () {
//         await Page.assertTextViewDisplayed(INTRO);
//         await Page.assertTextViewDisplayed(LOGIN);
//         await Page.assertTextViewDisplayed(USE_WITHOUT_ACCOUNT);
//     }

//     async selectUseWithoutLogin () {
//         (await Page.getTextViewElement(USE_WITHOUT_ACCOUNT)).click();
//     }

//     async selectCreateNewLogin () {
//         (await Page.getTextViewElement(CREATE_NEW_ACCOUNT)).click();
//     }

//     async assertUseWithoutLoginDisplayed () {
//         (await Page.assertTextViewDisplayed(CONTINUE_WITHOUT_ACCOUNT));
//     }

//     async assertCreateNewLoginDisplayed () {
//         (await Page.assertTextViewDisplayed(PHONE_NUMBER));
//     }
// }

=======
// locators
const loginHeader = '//android.view.ViewGroup[@resource-id="ForkScreen"]/android.view.ViewGroup[1]//android.widget.TextView[1]';
const withoutLoginButton = '//android.view.ViewGroup[@resource-id="ForkScreen"]/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.widget.TextView';

// methods
export const assertPageLoaded = async () => {
    await expect($(loginHeader)).toExist();
    await expect($(loginHeader)).toHaveTextContaining('VÍTEJTE');
};

export const clickLoginWithoutAccountButton = async () => {
    await expect($(withoutLoginButton)).toHaveTextContaining('Pokračovat bez účtu');
    await $(withoutLoginButton).click();
};

//GuestModeLoginPage - updated on down part of page (partial view)
const guestLoginPageHeader = '//android.view.ViewGroup[@resource-id="ForkScreen"]/android.view.ViewGroup[2]/android.widget.TextView';
const guestModeCheckBox = '//android.view.ViewGroup[@resource-id="ForkScreen"]/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup';
const continueButton = '//android.view.ViewGroup[@resource-id="ForkScreen"]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.TextView';

export const assertGuestModePageLoaded = async () => {
    await expect($(guestLoginPageHeader)).toExist();
    await expect($(guestLoginPageHeader)).toHaveTextContaining('pokračovat bez účtu');
};

export const clickOnCheckBox = async () => {
    await expect($(guestModeCheckBox)).toExist();
    await $(guestModeCheckBox).click();
};

export const clickOnContinueButton = async () => {
    await expect($(continueButton)).toExist();
    await $(continueButton).click();
};

//Login as existing user
const LogInButtonText = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.TextView';
const logInButton = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]';
        
export const assertLoginButtonText = async () => {
    await expect($(LogInButtonText)).toExist();
    await expect($(LogInButtonText)).toHaveTextContaining('Přihlásit se');
};

export const clickLoginButton = async () => {
    await expect($(logInButton)).toExist();
    await $(logInButton).click();
};
>>>>>>> Stashed changes
