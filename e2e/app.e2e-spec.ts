import { Testp2Page } from './app.po';

describe('testp2 App', () => {
  let page: Testp2Page;

  beforeEach(() => {
    page = new Testp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
