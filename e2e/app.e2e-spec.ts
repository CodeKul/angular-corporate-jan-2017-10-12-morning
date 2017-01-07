import { WeekendappPage } from './app.po';

describe('weekendapp App', function() {
  let page: WeekendappPage;

  beforeEach(() => {
    page = new WeekendappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
