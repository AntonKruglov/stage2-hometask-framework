const BasePage = require('./basePage');


class GoogleCloudCalculationResultsPage extends BasePage {


    get vmClassField() { return $('md-list-item.md-1-line:nth-child(8)') };
    get instanceTypeField() { return $('#input_70') };
    get regionField() { return $('#compute md-list md-list-item:nth-child(2)') };
    get localSsdField() { return $('#select_option_424 > .md-text') };
    get commitmentTermField() { return $('#compute md-list md-list-item.md-1-line.md-no-proxy.ng-scope') };
    get estimatedCostField() { return $('h2.md-title:nth-child(2) b:nth-child(1)') };
    get emailEstimateBtn() { return $('#email_quote') };
    get emailField() { return $('//*[@ng-model="emailQuote.user.email"]') };
    get sendEmailBtn() { return $('[aria-label="Send Email"]') };
    get randomEmailBtn() { return $('#webmail') };
    get copyBtn() { return $('//*[@id="cprnd"]') };
    get yopmailCheckInboxBtn() { return $('.md:nth-child(3)') };
    get refreshBtn() { return $('#refresh') };
    get estimatedCostFromGoogle() { return $('//*[@id="mail"]') };
    get getTextBtn() { return $('//*[text()="Text"]') };


    async fillInEmailField(email) {
        await email.waitForExist()
        await email.addValue(['Control', 'v']);
    }

    async getCostFromEmail(letter) {
        browser.switchToFrame(2);
        await letter.waitForExist();
    }

    async swichToAnotherWindow(win) {
        await browser.switchWindow(win);
    }

};


module.exports = new GoogleCloudCalculationResultsPage;
