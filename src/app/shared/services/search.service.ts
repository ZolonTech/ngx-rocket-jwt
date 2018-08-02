import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '@env/environment.prod';

@Injectable()
export class UploadService {

    offices = [
        {
            firstName: 'Max',
            lastName: 'Mustermann',
            profession: 'Junior Developer',
            department: 'IT'
        },
        {
            firstName: 'Sara',
            lastName: 'Smidth',
            profession: 'Sofware Engineer',
            department: 'IT'
        }
    ]

    constructor(private httpClient: HttpClient) { }


    getOfficesByZip(zip: string): Observable<any> {
        return Observable.create((observer: any) => {
            observer.next(this.offices);
            observer.complete();
        });
    }   

//   getOfficesByZip(zip: string): Observable<any> {
//     return this.httpClient
//       .disableApiPrefix()
//       .disableAuthToken()
//       .get(`${environment.apiUrl}/zipcode/${zip}`)
//       .pipe(
//         map((body: any) => body.results),
//         catchError(() => of('error...'))
//       );
//   }
}
