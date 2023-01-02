import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  parentDataInChild: string = '';


}

// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   templateUrl: './child.component.html',
//   styleUrls: ['./child.component.css']
// })
// export class ChildComponent {

//   @Input()
//   parentDataInChild: string = '';

//   childData: string = 'def';

//   @Output()
//   sendDataToParent: EventEmitter<any> = new EventEmitter<any>();

//   clickToSend = () => {
//     console.log(this.childData);
//     this.sendDataToParent.emit(this.childData);
//   };

// }
