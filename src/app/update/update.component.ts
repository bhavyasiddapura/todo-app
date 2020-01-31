import { Component, OnInit } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-update',
  template: `
  <style>
  .defaultTextBox {
      padding: 0;
      height: 30px;
      position: relative;
      left: 0;
      outline: none;
      border: 1px solid #cdcdcd;
      border-color: rgba(0,0,0,.15);
      background-color: white;
      font-size: 16px;
  }
  .advancedSearchTextbox {
      width: 526px;
      margin-right: -4px;
  }
  button {
      display: inline-block;
      background-color: green;
      border-radius: 10px;
      border: 2px double #cccccc;
      color: #eeeeee;
      text-align: center;
      font-size: 20px;
      padding: 10px;
      width: 150px;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
      cursor: pointer;
      margin: 5px;
      }
  </style>
  <br>
  <div align="center">

  name:  <input  type="text" class="defaultTextBox advancedSearchTextBox"  #newTodo />
  address:     <input type="text" class="defaultTextBox advancedSearchTextBox" #newList />
       <button (click)="updateTodo(newTodo.value,newList.value); newTodo.value='';newList.value=''">UPDATE</button>
       </div>
  `,
  styles: []
})
export class UpdateComponent implements OnInit {

updateTodo(newTodoName,newTodoAddress){

  update(newTodoName,newTodoAddress);

}
ngOnInit(){
}

}
