import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioRepository {
  private usuarios = []; // vamos trabalhar com memoria para nao ter q fazer ligação ao banco ainda

  async salvar(usuario) {
    this.usuarios.push(usuario); //Inserindo dado no array
  }

  async listaAll() {
    return this.usuarios;
  }
}
