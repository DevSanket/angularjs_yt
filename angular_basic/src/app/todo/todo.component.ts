import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  // styleUrls: ['./todo.component.css']
  styles:[
    `
      .Running{
        color : #fff;
      }
    `
  ]
})
export class TodoComponent implements OnInit {

  todo:string="";
  todoId = "Running";
  msg="";
  todo_msg = false;

  myData = ["hi","hit","goal"];
 

  constructor() { 
     
    this.todoId = Math.random() > 0.5 ? "Running" : "Pending";
 
  }

  ngOnInit(): void {
  }

  getMyTodo():string{
    return this.todo;
  }

  changeMsg(){
    this.todoId = Math.random() > 0.5 ? "Running" : "Pending";
    this.todo=this.msg;
    this.todo_msg=true;
  }

  onTextChange(event:Event){
     this.msg=(<HTMLInputElement>event.target).value;
      
  }

  getColor(){
    return this.todoId === "Running" ? "green" : "yellow";
  }
}
