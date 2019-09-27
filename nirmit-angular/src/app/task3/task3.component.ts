import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonDataService } from './common-data.service'
import { User, User2, User3 } from '../../app/types'
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { HttpService } from '../task2/http.service'

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
  @ViewChild('scheduledOrdersPaginator', { static: false }) paginator: MatPaginator;
  task4User: User2 = null;

  constructor(private commonService: CommonDataService, private httpService: HttpService) { }
  data: any[];
  task1Data: User[] = [];
  task2Data: User2[] = [];
  task3Data: User3[] = [];

  displayedColumns: string[] = ["sno", 'id', 'name', 'email', 'title', 'completed'];

  dataSource: any;

  ngOnInit() {
    this.task1Data = this.commonService.task1Data;
    this.task2Data = (this.commonService.task2Data);

    for (let i = 0; i < 10; i++) {
      let obj = {
        no: i,
        id: this.task1Data[i].id,
        email: this.task1Data[i].email,
        name: this.task1Data[i].name,
        title: this.task2Data[i].title,
        completed: this.task2Data[i].completed
      }
      this.task3Data.push(obj);
    }
    // console.log(this.task3Data);
    this.dataSource = new MatTableDataSource<User3>(this.task3Data);
    setTimeout(() => this.dataSource.paginator = this.paginator);
    setTimeout(() => { window.alert("Click on any record's title for TASK-4"); }, 500)
  }

  task4(index) {
    this.httpService.fetchUser(index + 1).subscribe((res: User2) => {
      this.task4User = res;
    })
  }
}
