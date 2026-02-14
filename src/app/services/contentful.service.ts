import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { createClient, EntryCollection } from 'contentful';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken
  })

  getAllEntires(limit: number = 6, skip: number = 0): Observable<EntryCollection<any>> {
    const promise = this.client.getEntries({
      limit: limit,
      skip: skip,
      order: ['-sys.createdAt']
    });
    return from(promise);
  }
}
