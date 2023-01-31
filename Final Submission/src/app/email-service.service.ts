import { Injectable } from '@angular/core';
import { Email } from './Interfaces/email';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor() { }

  
  // Example catching the error in the service. The controller will not 
  // notice any exceptional situation
  addEmail(email?: Email): Observable<Email> {
    return this.http.post<Student>(this.studentsURL, email, this.httpOptions).pipe(
      tap((newStudent: Student) => console.log(`added student with id=${newEmail.id}`)),
      catchError(this.handleError<Email>('addEmail'))
    );
  }
  
}
