// locators
const VerificationCodeScreen = '//android.view.ViewGroup[@resource-id="verificationCodeScreen"]/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView';
const SmsCodeInput = '//android.widget.EditText[@resource-id="smsCodeInput"]';


// methods
export const assertSmsPageLoaded = async () => {
    await expect($(VerificationCodeScreen)).toHaveTextContaining('Vložte prosím kód, který jsme vám');
};

export const inputSmsCode = async () => {
    await $(SmsCodeInput).click();
    await browser.pause(1000);
    await $(SmsCodeInput).setValue('9999');
};