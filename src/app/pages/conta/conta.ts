import { Component, ViewEncapsulation } from '@angular/core';
import { LayoutConta } from '../../components/layout-conta/layout-conta';
import {RouterLink } from '@angular/router';


@Component({
  selector: 'app-conta',
  standalone: true,
  imports: [LayoutConta,RouterLink],
  templateUrl: './conta.html',
  styleUrls: ['./conta.css'],
  encapsulation: ViewEncapsulation.None
})
export class Conta {
  
}
