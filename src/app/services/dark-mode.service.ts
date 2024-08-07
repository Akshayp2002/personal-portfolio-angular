import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  darkModeSignel = signal<string>(
    JSON.parse(window.localStorage.getItem('darkModeSignel')?? 'null')
  );

  updateDarkMode(){
    this.darkModeSignel.update((value)=> (value === "dark" ? "null" :"dark"))
  }


  constructor() { 
    effect(()=>{
      window.localStorage.setItem('darkModeSignel',JSON.stringify(this.darkModeSignel()))
    })
  }
}
