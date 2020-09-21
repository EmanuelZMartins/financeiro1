import { Usuario } from './../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss']
})
export class UsuarioCadastroComponent implements OnInit {

  public usuario = new Usuario();
  public form:FormGroup = new FormGroup({
    nome: new FormControl(''),
    login: new FormControl(),
    senha: new FormControl() 
  });

  constructor() { }

  ngOnInit(): void {
  }

  public salvar() {
    if(this.form.invalid) {
      alert('Campos Inválidos');
      return;
    }
    this.usuario = this.form.value;
    console.log('Usuário', this.usuario);
    localStorage.setItem('usuário', JSON.stringify(this.usuario));
  }

}
