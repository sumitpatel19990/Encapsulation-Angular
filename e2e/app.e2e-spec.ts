import { EncapsulationPage } from './app.po';

describe('encapsulation App', function() {
  let page: EncapsulationPage;

  beforeEach(() => {
    page = new EncapsulationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
