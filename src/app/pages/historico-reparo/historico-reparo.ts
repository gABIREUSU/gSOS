import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { os, OsService } from '../../services/os-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historico-reparo',
  imports: [CommonModule],
  templateUrl: './historico-reparo.html',
  styleUrl: './historico-reparo.css',
})
export class HistoricoReparo implements OnInit {

  osList: os[] = [];
  idpc!: number;

  constructor(private route: ActivatedRoute, private osService: OsService) { }

  ngOnInit(): void {
    this.idpc = Number(this.route.snapshot.paramMap.get('idpc'));

    this.osService.listarOSporPC(this.idpc).subscribe(data => {
      this.osList = data;
    });
  }

}
