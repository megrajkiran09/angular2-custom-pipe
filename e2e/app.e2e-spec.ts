import { CustomPipePage } from './app.po';

describe('custom-pipe App', () => {
  let page: CustomPipePage;

  beforeEach(() => {
    page = new CustomPipePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
