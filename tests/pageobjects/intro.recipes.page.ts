// locators
const introRecipesHeader = '//android.view.ViewGroup[@resource-id="introSlide7"]/android.widget.TextView';
const loginButton = '//android.view.ViewGroup[@content-desc="IntroScreen:logInButton"]/android.widget.TextView';

// methods
export const assertPageLoaded = async () => {
    await expect($(introRecipesHeader)).toExist();
    await expect($(introRecipesHeader)).toHaveTextContaining('OBJEVTE TISÍCE RECEPTŮ');
};

export const clickLoginButton = async () => {
    await expect($(loginButton)).toHaveTextContaining('Přihlásit se');
    await $(loginButton).click();
};