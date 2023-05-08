import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';

@Controller('/produto')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  async salvaProduto(@Body() dadosProduto) {
    this.produtoRepository.salvar(dadosProduto);
    return dadosProduto;
  }

  @Get()
  async listaProduto() {
    return this.produtoRepository.listaProdutos();
  }
}
