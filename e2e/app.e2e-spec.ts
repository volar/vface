import { VfacePage } from './app.po';

describe('vface App', function() {
  let page: VfacePage;

  beforeEach(() => {
    page = new VfacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
