import { PesquisaProjetoPage } from './app.po';

describe('pesquisa-projeto App', function() {
  let page: PesquisaProjetoPage;

  beforeEach(() => {
    page = new PesquisaProjetoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
