export class ProdutoRepository {
  private produtos = [];

  async salvar(produtos) {
    this.produtos.push(produtos);
  }

  async listaProdutos() {
    return this.produtos;
  }
}
