import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Task1Component } from './task1/task1.component';
import { environment } from '../environments/environment'
import { urls } from '../urls/urls';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';

// import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    Task3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
    // DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httplink: HttpLink) {
    apollo.create({
      link: httplink.create({ uri: `${environment.baseUrl}/${urls.graphUrl}` }),
      cache: new InMemoryCache()
    })
  }
}
