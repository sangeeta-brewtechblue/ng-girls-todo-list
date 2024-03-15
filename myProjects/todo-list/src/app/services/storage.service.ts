import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getData(key:string):any{
    let str =localStorage.getItem(key)
     if(str)
    return JSON.parse(str);
  }


  setData(key:string,data:any){
    localStorage.setItem(key,JSON.stringify(data));
  }
}
