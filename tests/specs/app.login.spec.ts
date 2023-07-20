describe('Login', () => {

    it('should be able use app without login', async () => {
        const headerTextElement = await $('//android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[1]');
        await expect(headerTextElement).toExist();
        await expect(headerTextElement).toHaveTextContaining('Pomozte nám zlepšit aplikaci');

        // const headerText = 'new UiSelector().textContains("Pomozte nám zlepšit aplikaci").className("android.widget.TextView")';
        // const headerTextElement = await $(`android=${headerText}`);
        // await expect(headerTextElement).toExist();

        const acceptButton = 'new UiSelector().text("Přijmout vše").className("android.widget.TextView")';
        const acceptButtonElement = await $(`android=${acceptButton}`);
        await acceptButtonElement.click();

        // const acceptButton = await $('//android.view.ViewGroup[@content-desc="TrackingConsentScreen:AcceptAll"]');
        // await acceptButton.click();

        const headerIntroElement = await $('//android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView');
        await expect(headerIntroElement).toExist();
        await expect(headerIntroElement).toHaveTextContaining('S APLIKACÍ MŮJ ALBERT');

        const skipButton = 'new UiSelector().text("Přeskočit").className("android.widget.TextView")';
        const skipButtonElement = await $(`android=${skipButton}`);
        await skipButtonElement.click();

    });

});
