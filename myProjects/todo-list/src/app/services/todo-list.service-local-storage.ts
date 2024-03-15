import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item.ts';
import { StorageService } from './storage.service.js';

const todoListStorageKey ='Todo_List';
const defaultTodoList : TodoItem[] = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList : TodoItem[];
  
  constructor(private storageService:StorageService) {
    this.todoList = storageService.getData(todoListStorageKey)||defaultTodoList;
  }
  getTodoList(): TodoItem[] {
    return this.todoList;
  }
  addItem(item:TodoItem) {    
    this.todoList.push(item);
   // this.storageService.setData(todoListStorageKey,this.todoList);
    this.saveList();
  }
  updateItem(item:TodoItem,changes: TodoItem){

    const index= this.todoList.indexOf(item);
    this.todoList[index] = {...item, ...changes};
   // this.storageService.setData(todoListStorageKey,this.getTodoList);
   this.saveList();
  }

  saveList(){
    this.storageService.setData(todoListStorageKey,this.todoList);
  }

 deleteItem(item:TodoItem){
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index,1);
    this.saveList();
 }





}
