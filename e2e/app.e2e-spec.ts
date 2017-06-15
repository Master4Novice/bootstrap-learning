import { BootstrapLearningPage } from './app.po';

describe('bootstrap-learning App', () => {
  let page: BootstrapLearningPage;

  beforeEach(() => {
    page = new BootstrapLearningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
