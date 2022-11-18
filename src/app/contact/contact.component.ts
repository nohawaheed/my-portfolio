import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ContactMeService } from './../contact-me.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private _contactMeService: ContactMeService
  ) {}
  formSubmitSuccess: string = '';
  formSubmitError: string = '';
  hide: boolean = false;
  contactMeForm = this._formBuilder.group({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    subject: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(100),
    ]),
    message: new FormControl(null, [
      Validators.required,
      Validators.minLength(50),
      Validators.maxLength(500),
    ]),
  });
  ngOnInit(): void {}
  hideMessage() {
    setTimeout(() => {
      this.hide = true;
    }, 5000);
  }
  formSubmit(formValues: FormGroup) {
    // console.log(this.contactMeForm.value);
    if (this.contactMeForm.valid) {
      this._contactMeService.sendFormValuesToEmail(formValues.value).subscribe({
        next: (response) => (this.formSubmitSuccess = response.message),
        error: (response) => (this.formSubmitError = response.message),
      });
      this.hideMessage();
      this.contactMeForm.reset();
    }
  }
}
