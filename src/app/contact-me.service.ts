import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ContactMeService {
  constructor(private _httpClient: HttpClient) {}
  sendFormValuesToEmail(formInputs: FormGroup): Observable<any> {
    return this._httpClient
      .post(
        'https://formsubmit.co/ajax/3fbf9bee378a4a3fc5cf71812bc62173',
        formInputs,
        { headers: new HttpHeaders().set('Content-Type', 'application/json') }
      )
      .pipe(
        map(
          (response: any) => {
            if (response) {
              return response;
            }
          },
          (error: any) => {
            return error;
          }
        )
      );
  }
}
