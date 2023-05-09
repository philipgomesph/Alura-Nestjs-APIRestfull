import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioRepository {
  private usuarios: UsuarioEntity[] = []; // vamos trabalhar com memoria para nao ter q fazer ligação ao banco ainda

  async salvar(usuario) {
    this.usuarios.push(usuario); //Inserindo dado no array
  }

  async listaAll() {
    return this.usuarios;
  }

  async existeEmail(email: string) {
    const possivelUsuario = this.usuarios.find(
      (usuario) => usuario.email === email,
    );

    return possivelUsuario !== undefined;
  }

  // Partial<UsuarioEntity> Vai receber dados parciais do UsuarioEntity
  async atualiza(id: string, dadosDeAtualização: Partial<UsuarioEntity>) {
    const possivelUsuario = this.usuarios.find(
      (usuarioSalvo) => usuarioSalvo.id === id,
    );

    if (!possivelUsuario) {
      throw new Error('Usuario não existe');
    }

    Object.entries(dadosDeAtualização).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      possivelUsuario[chave] = valor;

      return possivelUsuario;
    });
  }
}
