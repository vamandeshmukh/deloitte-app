import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  parentData: string = 'abc';

  childDataInParent: string = '';

  receiveChildData = ($event: any) => {
    console.log('receiveChildData called');
    this.childDataInParent = $event;
  };

}

