//const Page = require('./page');
import Page from './page';

class LandingPage extends Page {
    open() {
        super.open();
    }

   get pageHeading() {  return ".projectTitle"; }
   get getPageHeading() { return this.pageHeading.getText();}

}

//module.exports = LandingPage;
//module.exports = LandingPage;

export default new LandingPage();