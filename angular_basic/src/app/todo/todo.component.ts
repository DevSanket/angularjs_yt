import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
  // styles:[
  //   `
  //     .Running{
  //       color : #fff;
  //     }
  //   `
  // ]
})
export class TodoComponent implements OnInit {

  todo:string="";
  msg="";
  todo_msg = false;

  myData:String[] = [];
 

  constructor() { 
     
  
 
  }

  ngOnInit(): void {
  }

  getMyTodo():string{
    return this.todo;
  }

  changeMsg(){
    this.todo=this.msg;
    this.myData.push(this.todo);
    this.msg="";
    // this.todo_msg=true;

  }

  onTextChange(event:Event){
     this.msg=(<HTMLInputElement>event.target).value;
      
  }

  // getColor(){
  //   return this.todoId === "Running" ? "green" : "yellow";
  // }
}
