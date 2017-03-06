import { WitherAppAPIPage } from './app.po';

describe('wither-app-api App', () => {
  let page: WitherAppAPIPage;

  beforeEach(() => {
    page = new WitherAppAPIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
