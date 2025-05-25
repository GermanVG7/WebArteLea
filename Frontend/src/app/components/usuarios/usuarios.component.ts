import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuario: Usuario = { nombre: '', email: '' };
  editando: boolean = false;
  idEditando: number | null = null;

  constructor(private usuarioService: UsuarioService) {}

  // SE LANZA AUTOMATICAMENTE AL MOSTRAR EL COMPONENTE
  ngOnInit(): void {
    this.getUsuarios();
  }

  // CARGAR USUARIOS DESDE EL BACKEND
  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  // CREAR O ACTUALIZAR UN USUARIO
  guardarUsuario(): void {
    if (this.editando && this.idEditando !== null) {
      // SI ESTAMOS EDITANDO, ENVIAREMOS PUT
      this.usuarioService.updateUsuario(this.idEditando, this.usuario).subscribe(() => {
        this.getUsuarios();
        this.resetFormulario();
      });
    } else {
      // SI NO ESTAMOS EDITANDO, CREAMOS UN NUEVO USUARIO
      this.usuarioService.addUsuario(this.usuario).subscribe(() => {
        this.getUsuarios();
        this.resetFormulario();
      });
    }
  }

  // LLENAR EL FORMULARIO CON LOS DATOS DEL USUARIO AL EDITAR
  editar(usuario: Usuario): void {
    this.usuario = { ...usuario };
    this.editando = true;
    this.idEditando = usuario.id!;
  }

  // ELIMINAR UN USUARIO
  eliminar(id: number): void {
    this.usuarioService.deleteUsuario(id).subscribe(() => {
      this.getUsuarios();
    });
  }

  // RESTABLECER EL FORMULARIO A SU ESTADO ORIGINAL
  resetFormulario(): void {
    this.usuario = { nombre: '', email: '' };
    this.editando = false;
    this.idEditando = null;
  }
}

