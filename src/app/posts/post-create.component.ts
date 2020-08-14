import { Component } from '@angular/core';

@Component({
  selector: 'post-create-root',
  templateUrl: './post-create.component.html'
})
export class PostComponent {
  enteredValue='';
  title = 'app';
  onClick(){
  this.title=this.enteredValue;

  }
}
