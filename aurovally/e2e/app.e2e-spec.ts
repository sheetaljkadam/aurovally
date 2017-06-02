import { AurovallyPage } from './app.po';

describe('aurovally App', () => {
  let page: AurovallyPage;

  beforeEach(() => {
    page = new AurovallyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
