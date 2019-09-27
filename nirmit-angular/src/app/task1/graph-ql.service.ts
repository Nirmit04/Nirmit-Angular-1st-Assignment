import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { User, Query } from '../types'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Queries from './queries'

@Injectable({
  providedIn: 'root'
})
export class GraphQlService {
  allqueries: Queries = new Queries();
  constructor(private apollo: Apollo) { }
  users: Observable<User[]> = null;
  getAllUsersFromGrapQl() {
    let userFetch = this.allqueries.fetchAllUsers;
    this.users = this.apollo.watchQuery<Query>({
      query: gql`
      ${userFetch}    
      `
    })
      .valueChanges.pipe(
        map(result => result.data.allUsers)
      );
    if (this.users) {
      return this.users
    }
  }
}
