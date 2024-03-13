import { Component } from '@angular/core';

@Component({
  selector: 'app-input-button-uni',
  standalone: true,
  imports: [],
  templateUrl: './input-button-uni.component.html',
  styleUrl: './input-button-uni.component.scss'
})
export class InputButtonUniComponent {
     title="learn about comp"
     constructor(){
      setTimeout(()=>{this.title="not this one"},1000);
     }
     changeTitle(newt:string){
      this.title =newt;
     }
      
     getInputValue($event:any){
      return $event.target.value;
     }
     

}
