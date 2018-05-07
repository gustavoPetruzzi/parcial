import { Component, OnInit } from '@angular/core';
import { miHttp } from '../mihttp.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private http: miHttp) { }

  ngOnInit() {
  }
  traerTodos(){
  	console.log(miHttp.httpGetP('lista'));

  }
}
