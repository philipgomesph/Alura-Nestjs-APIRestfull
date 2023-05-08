import { Type } from 'class-transformer';
import {
  Allow,
  Equals,
  IsArray,
  IsDate,
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  Min,
  ValidateNested,
} from 'class-validator';

export class ImagemProdutoDTO {
  url: string;
  descricaoImg: string;
}

export class CaracteristicaProdutoDTO {
  nome: string;
  descricao: string;
}

export class CriaProdutoDTO {
  @IsNotEmpty()
  nome: string;
  @IsPositive()
  valor: number;
  @Allow()
  quantidadeDisponivel: number;
  @Allow()
  descricao: string;
  @Allow()
  caracteristicas: CaracteristicaProdutoDTO[];
  @Allow()
  imagens: ImagemProdutoDTO[];
  @Allow()
  categoria: string;
  @Allow()
  dataCriacao: Date;
  @Allow()
  dataAtualizacao: string;
}
