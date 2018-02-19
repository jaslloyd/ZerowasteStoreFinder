import { ZeroWasteStoreFinderNg4Page } from './app.po';

describe('zero-waste-store-finder-ng4 App', () => {
  let page: ZeroWasteStoreFinderNg4Page;

  beforeEach(() => {
    page = new ZeroWasteStoreFinderNg4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
