// locators
const titleElement = '//android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[1]';
const acceptButton = '//android.view.ViewGroup[@content-desc="TrackingConsentScreen:AcceptAll"]';

// methods
export const assertPageLoaded = async () => {
    await expect($(titleElement)).toExist();
    await expect($(titleElement)).toHaveTextContaining('Pomozte nám zlepšit aplikaci');
    await expect($(titleElement)).toHaveTextContaining('Můj Albert');
};

export const clickAcceptAllButton = async () => {
    await $(acceptButton).click();
};