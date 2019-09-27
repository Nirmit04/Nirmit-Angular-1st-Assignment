import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'
import { CommonDataService } from '../task3/common-data.service'
import { User2 } from '../../app/types'
@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  constructor(private httpService: HttpService, private commoService: CommonDataService) { }
  users: User2[]
  ngOnInit() {
    this.httpService.fetchUsers().subscribe((res: User2[]) => {
      this.users = res;
      this.commoService.task2Data = res
    })

  }

}
