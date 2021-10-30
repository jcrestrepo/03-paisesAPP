import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button{
      margin-right:5px;  
    }`
  ]
})
export class PorRegionComponent  {

  regiones:string[]=[ "africa", "americas", "asia", "europe", "oceania"]
  regionActiva:string="";


  termino:string="";
  hayError:boolean=false;
  paises:Country[]=[];

  constructor(private paisService:PaisService) { 

  }
  buscar(termino:string){
    this.hayError=false;
    this.termino=termino;
    console.log(this.termino);
    this.paisService.buscarPaisRegion(this.termino)
    .subscribe( paises=> {
      this.paises=paises;
      
      console.log(paises);
    }, (err)=>{
      this.hayError=true;
      this.paises=[];
      // console.log('Error');
      // console.info(err);
    });
    
  }


  getClaseCSS(region:string) : string{

    return (region===this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }
  activarRegion(region:string){

    if(region!=this.regionActiva){
      this.buscar(this.regionActiva);
      this.regionActiva=region;
    }
   
  }

}
