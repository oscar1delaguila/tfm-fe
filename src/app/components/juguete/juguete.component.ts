import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juguete } from 'src/app/models/juguete.interface';
import { JuguetesService } from 'src/app/services/juguetes.service';

@Component({
  selector: 'app-juguete',
  templateUrl: './juguete.component.html',
  styleUrls: ['./juguete.component.css']
})
export class JugueteComponent implements OnInit {


  juguete!: Juguete;

  constructor( 
    private juguetesService: JuguetesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {


    const identifier:string = <string>this.activatedRoute.snapshot.paramMap.get('id');
    console.log('identifier --> ', identifier);

    this.juguetesService.getJugueteById(identifier).subscribe({ 
      
      next:(juguete:Juguete) => { 

          if (!juguete) {
            return this.router.navigateByUrl('/');
          }

          this.juguete = juguete;
          console.log('Juguete --> ', this.juguete);

          return;

        }
      });
  }

}
