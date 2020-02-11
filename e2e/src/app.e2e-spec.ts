import { AppPage } from './app.po';
import { browser, logging,element, by } from 'protractor';
//import { element } from '@angular/core/src/render3';

 describe('workspace-project App', () => {
     
  it('should land to the login page', () => {
     browser.get('/');
     expect(browser.getCurrentUrl()).toContain('login');
     browser.sleep(4000);
  })

  it('should redirect to dashboard on successfull login', () => {
    const inputElements=element.all(by.css('input'));
    inputElements.get(0).sendKeys('vipul');
    inputElements.get(1).sendKeys('Vipul@123');
    
    //inputElements.get(2).click();
    element(by.css('button')).click();

    expect(browser.getCurrentUrl()).toContain('dashboard/view/note-view');

    browser.sleep(5000);
 })

//   let page: AppPage;

//   beforeEach(() => {
//     page = new AppPage();
//   });

//   it('should display welcome message', () => {
//     page.navigateTo();
//     expect(page.getTitleText()).toEqual('Welcome to keep-app!');
//   });

//   afterEach(async () => {
//     // Assert that there are no errors emitted from the browser
//     const logs = await browser.manage().logs().get(logging.Type.BROWSER);
//     expect(logs).not.toContain(jasmine.objectContaining({
//       level: logging.Level.SEVERE,
//     } as logging.Entry));
//   });
});
