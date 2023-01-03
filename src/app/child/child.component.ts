
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  parentDataInChild: string = '';

  childData: string = 'def';

  @Output()
  sendEvent = new EventEmitter<any>();

  sendChildData = () => {
    console.log('sendChildData called');
    this.sendEvent.emit(this.childData);
  };


}




