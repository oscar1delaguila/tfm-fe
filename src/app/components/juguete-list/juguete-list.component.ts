import { Component, OnInit } from '@angular/core';
import { Juguetes } from 'src/app/models/juguetes.interface';
import { JuguetesService } from 'src/app/services/juguetes.service';

@Component({
  selector: 'app-juguete-list',
  templateUrl: './juguete-list.component.html',
  styleUrls: ['./juguete-list.component.css']
})
export class JugueteListComponent implements OnInit {


  juguetes!: Juguetes;

  constructor(private juguetesService: JuguetesService) { }

  ngOnInit(): void {

    this.juguetesService.getAllJuguetes().subscribe((juguetes) => this.juguetes = juguetes);

  }

}
