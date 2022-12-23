import { Component } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
})

export class ContactComponent {

    userDataEntered = {
        firstName: '',
        phone: '',
        email: ''
    };

    userDataToDisplay = {
        firstName: '',
        phone: '',
        email: ''
    };

    submitUserData = () => {
        this.userDataToDisplay = this.userDataEntered;
        this.userDataEntered = {
            firstName: '',
            phone: '',
            email: ''
        };
    };
}
 