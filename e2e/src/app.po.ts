import { browser, by, element } from 'protractor';

export class AppPage {
  // tslint:disable: promise-function-async
  public navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  public getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
