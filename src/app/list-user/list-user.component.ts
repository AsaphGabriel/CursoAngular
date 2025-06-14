import { Component, OnInit } from '@angular/core';
import {IUsuario } from '../models/iusuario';
import { ListUsersService } from '../services/list-users.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{

  constructor(private userService: ListUsersService, private router: Router){}


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

  ngOnInit(): void {
    this.listarUsuarios;
  }

  public abrirProdutos(): void{
    this.router.navigate(['produtos']);
  }
  public abrirCarrinho(): void{
    this.router.navigate(['carrinho']);
  }
}
