import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import gql from 'graphql-tag';
import { User, Query } from '../types'
import { GraphQlService } from './graph-ql.service'
import { CommonDataService } from '../task3/common-data.service'
@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  users: Observable<User[]>
  allUsers: User[]
  constructor(private apollo: Apollo, private graphQlService: GraphQlService, private commoService: CommonDataService) { }

  ngOnInit() {
    this.graphQlService.getAllUsersFromGrapQl().subscribe(res => {
      this.allUsers = res
      this.commoService.task1Data = res;
    });
  }

}
