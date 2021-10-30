import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit{
  
  @Output() onEnter:EventEmitter<string>  = new EventEmitter();
  @Output() onDebounce:EventEmitter<string>  = new EventEmitter();
  
  @Input() placeholder:string="";

  debounce:Subject<string>=new Subject();

  termino:string='';

  ngOnInit(): void {

    this.debounce
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor=>{
      this.onDebounce.emit(valor)
    });
  }

  buscar(){
    
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.debounce.next(this.termino);
  }

}
