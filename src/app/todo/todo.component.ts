import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo',
  template:
  `
   <style>
    .defaultTextBox {
        padding: 0;
        height: 40px;
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
  name: <input  type="text"  class="defaultTextBox advancedSearchTextBox" #newTodo />
  address: <input type="text"  class="defaultTextBox advancedSearchTextBox" #newList />
   <button (click)="addTodo(newTodo.value,newList.value); newTodo.value='';newList.value=''">ADD</button>


   <table>

     <tr>
       <th>Name</th>

   <th>Address</th>
       <th>Actions</th>

     </tr>

       <tr *ngFor="let todo of todos">
       <td>{{todo.name}}</td>

       <td>{{todo.address}}</td>
         <td>
           <button (click)="deletetodo(todo)">Remove</button>
         </td>
          <td>
                   <button> <nav><a [routerLink]="['/update',todo]">Update</a></nav></button>
                  </td>

     </tr>

   </table>
   </div>

  `,
  styles: []
})
export class TodoComponent implements OnInit {

  todos=[
  {
    name:'Bhavya',

    address:'Banglore',

  },
  {
      name:'Divya',

      address:'Banglore',

    },
    {
        name:'Akshatha',

        address:'Udupi',

      },
      {
          name:'Shilpa',

          address:'Banglore',

        },
  ];
  addTodo(newTodoName,newTodoAddress){
  var newtodo={
  name:newTodoName,
  address:newTodoAddress
  };
  this.todos.push(newtodo);
}
deletetodo(todo){
  this.todos=this.todos.filter(t=>t!== todo)
}


}
