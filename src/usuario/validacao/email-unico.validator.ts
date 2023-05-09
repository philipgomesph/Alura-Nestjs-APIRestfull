import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UsuarioRepository } from '../usuario.repository';
import { asyncScheduler } from 'rxjs';
import { Injectable } from '@nestjs/common';

@Injectable() //Transformando em provider
@ValidatorConstraint({ async: true }) // Falando que essa validação é assincrona {async:true}
export class EmailUnicoValidator implements ValidatorConstraintInterface {
  /// Classe de validação
  constructor(private usuarioRepository: UsuarioRepository) {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const usuarioComEmailExiste = await this.usuarioRepository.existeEmail(
      value,
    );

    return !usuarioComEmailExiste;
  }
}

//Registrando o decorator acima
export const EmailEhUnico = (opcoesDeValidacao: ValidationOptions) => {
  return (objeto: object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: EmailUnicoValidator,
    });
  };
};
