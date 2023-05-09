import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validacao/email-unico.validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'o nome nao pode ser vazio' })
  nome: string;

  @IsEmail(undefined, { message: 'O e-mail informado é invalido' })
  @EmailEhUnico({ message: 'Ja existe um usuario com este email' })
  email: string;

  @MinLength(6, { message: 'a senha precisa ter ao menos 6 caracteres' })
  senha: string;
}
