import { Component, OnInit } from '@angular/core';
import {IUsuario } from '../models/iusuario';
import { ListUsersService } from '../services/list-users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{

  constructor(private userService: ListUsersService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

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
    this.userService.listarUsuarios().subscribe((dados) => {
      this.dataSource = dados;
    })
  }

  ngOnit(): void{
    this.listarUsuarios;
  }
}
