import * as TrackingPage from '../pageobjects/tracking.page';
import * as IntroPage from '../pageobjects/intro.page';
describe('Login', () => {
    it('should be able use app without login', async () => {
        await TrackingPage.assertPageLoaded();
        await TrackingPage.clickAcceptAllButton();
        await IntroPage.assertPageLoaded();
        await IntroPage.clickSkipButton();

        // TODO
    });

});
