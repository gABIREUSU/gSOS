import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-layout-conta',
  imports: [CommonModule, RouterLink],
  templateUrl: './layout-conta.html',
  styleUrl: './layout-conta.css',
})
export class LayoutConta {
  @Input() title: String = "";
  @Input() PrimaryBtnText: String = "";
  @Input() SecondBtnText: String = "";
  @Input() title2: String = "";
  @Input() layoutClass: string = '';
  @Input() headerClass: string = '';
  @Input() mainClass: string = '';


}
