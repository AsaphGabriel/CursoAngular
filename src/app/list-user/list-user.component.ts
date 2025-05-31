import { Component } from '@angular/core';
import { IUsuario } from "../models/iusuarios"
import { first } from 'rxjs';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  displayedColumns = ['id','first_name','last_name','email'];

  dataSource: IUsuario[] = [];

  listaUsuarios : IUsuario[] = [
    {
      id: 1,
      first_name: 'Maria',
      last_name: 'Silva',
      email: 'maria@gmail.com'
    },
    {
      id: 2,
      first_name: 'Jõao',
      last_name: 'Pereira',
      email: 'joao@gmail.com'
    }
  ];
}
