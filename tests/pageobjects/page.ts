
class Page {
    async getTextViewElement (elementText: string) {
        return await $(`android=new UiSelector().text("${elementText}").className("android.widget.TextView")`);
    }

    async assertTextViewDisplayed (text: string) {
        await expect(this.getTextViewElement(text)).toBeDisplayed();
    }
}

export default new Page();

