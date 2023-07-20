describe('Login', () => {

    it('should be able use app without login', async () => {
        const titleElement = await $('//android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[1]');

        await expect(titleElement).toExist();
        await expect(titleElement).toHaveTextContaining('Pomozte nám zlepšit aplikaci');
        await expect(titleElement).toHaveTextContaining('Můj Albert');
        await expect(titleElement).not.toHaveTextContaining('lalala');

        const acceptButton = await $('//android.view.ViewGroup[@content-desc="TrackingConsentScreen:AcceptAll"]');
        await acceptButton.click();

        const introHeader = await $('//android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView');
        await expect(introHeader).toHaveTextContaining('S APLIKACÍ MŮJ ALBERT');
        await expect(introHeader).toExist();

        const skipButton = await $('android=new UiSelector().text("Přeskočit").className("android.widget.TextView")');
        await expect(skipButton).toHaveTextContaining('Přeskočit');
        await skipButton.click();

        // TODO
    });

});
