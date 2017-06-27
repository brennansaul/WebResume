import { SaulWebPage } from './app.po';

describe('saul-web App', () => {
  let page: SaulWebPage;

  beforeEach(() => {
    page = new SaulWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
