import { FrontendscreenPage } from './app.po';

describe('frontendscreen App', () => {
  let page: FrontendscreenPage;

  beforeEach(() => {
    page = new FrontendscreenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
