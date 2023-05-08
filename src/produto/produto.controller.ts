import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { CriaProdutoDTO } from './CriaProduto.dto';

@Controller('/produto')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  async salvaProduto(@Body() dadosProduto: CriaProdutoDTO) {
    this.produtoRepository.salvar(dadosProduto);
    return dadosProduto;
  }

  @Get()
  async listaProduto() {
    return this.produtoRepository.listaProdutos();
  }
}
