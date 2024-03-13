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
     submit: EventEmitter<string> = new EventEmitter<string>();
     constructor(){
      setTimeout(()=>{this.title="not this one"},1000);
     }
     submitValue(newTitle:string){
      this.submit.emit(newTitle);
     }
      
     getInputValue($event:any){
      return $event.target.value;
     }
     

}
