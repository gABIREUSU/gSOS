import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-layout-login-cadastro',
  imports: [CommonModule],
  templateUrl: './layout-login-cadastro.html',
  styleUrl: './layout-login-cadastro.css',
})
export class LayoutLoginCadastro {
  @Input() title: String = "";
  @Input() buttonSubmit: String = "";
  @Input() checkbox: String = "";

  @Output() submit = new EventEmitter<void>();










}
