import { Injectable } from '@angular/core';
import { unHttpservice } from './un-http.service';
@Injectable()
export class PersonasService {

  constructor(public unhttp: unHttpservice) { }
    
  public listar():Promise<Array<any>> {
      return this.unhttp.httpGetP('lista')
        .then(data => {
          return data;
        })
        .catch(err => {
          console.log(err);
          return null;
        })
  }

  public agregar(){
    let datos = new URLSearchParams();
    datos.append('nombre', "Roberto");
    datos.append('mail', "roberto@roberto.com");
    datos.append('sexo', 'm');
    datos.append('password', '1161');
    this.unhttp.httpPostData('alta', datos)
    .then(data =>{
      console.log(data);
    })
    .catch(err=> {
      console.log(err);
      return null;
    })
  }


}
