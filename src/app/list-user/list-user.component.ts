import { Component } from '@angular/core';
import {IUsuario } from '../models/iusuario';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  displayedColumns = ['id', 'first_name', 'last_name', 'email'];

  listaUsuario: IUsuario[] = [
    {
      id: 1,
      first_name: 'Maria',
      last_name: 'Silva',
      email: 'maria@gmail.com'
    },
    {
      id: 2,
      first_name: 'Joao',
      last_name: 'Pedro',
      email: 'joao@joao.com'
    }
  ];

  dataSource:IUsuario[] = [];

  public listarUsuarios(): void{
    this.dataSource = this.listaUsuario;
  }

  ngOnit(): void{
    this.listarUsuarios;
  }
}
