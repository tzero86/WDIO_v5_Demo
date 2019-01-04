import assert from 'assert';
import LandingPage from '../pages/landing.page';

describe('This is just a test',  ()=>{
    it('should have the correct page title', function () {
        browser.url('https://webdriver.io');
        const title = browser.getTitle();
        console.log(`The title found on the page is: ${title}`);
        assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });

    it('Should have the expected heading', () => {
        assert.equal($(LandingPage.pageHeading).getText(), "WEBDRIVER I/O");
        
    });
});