import { CliProgectStartPage } from './app.po';

describe('cli-progect-start App', function() {
  let page: CliProgectStartPage;

  beforeEach(() => {
    page = new CliProgectStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
