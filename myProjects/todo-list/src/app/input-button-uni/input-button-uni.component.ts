import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-uni',
  standalone: true,
  imports: [],
  templateUrl: './input-button-uni.component.html',
  styleUrl: './input-button-uni.component.scss'
})
export class InputButtonUniComponent {
     title="learn about comp"
     @Output() 
     submitOne: EventEmitter<string> = new EventEmitter<string>();
     constructor(){
      setTimeout(()=>{this.title="not this one"},1000);
     }
     submitValue(newTitle:string){
      alert("hi"+newTitle);
      this.submitOne.emit(newTitle);
     }
      
     getInputValue($event:any){
      return $event.target.value;
     }
     

}
