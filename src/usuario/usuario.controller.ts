import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios') // localhost:3000/usuarios
export class UsuarioController {
  //private usuarioRepository = new UsuarioRepository();

  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario) {
    this.usuarioRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }

  @Get()
  async listaUsuarios() {
    return this.usuarioRepository.listaAll();
  }
}
