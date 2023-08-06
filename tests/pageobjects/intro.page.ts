// locators
const introHeader = '//android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView';
const skipButton = '//android.view.ViewGroup/android.view.ViewGroup[8]/android.widget.TextView';

// methods
export const assertPageLoaded = async () => {
    await expect($(introHeader)).toHaveTextContaining('S APLIKACÍ MŮJ ALBERT');
    await expect($(introHeader)).toExist();
};

export const clickSkipButton = async () => {
    await expect($(skipButton)).toHaveTextContaining('Přeskočit');
    await $(skipButton).click();
};