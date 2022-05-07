import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo:string="";
  todoId:number = 1;
  msg="";
  button_disable = true;

  constructor() { 

    setTimeout(() => {
      this.button_disable = false;
    },2000)

  }

  ngOnInit(): void {
  }

  getMyTodo():string{
    return this.todo;
  }

  changeMsg(){
    this.todo=this.msg;
  }

  onTextChange(event:Event){
     this.msg=(<HTMLInputElement>event.target).value;
      
  }
}
