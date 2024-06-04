import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../service/logger.service';
import { logging, promise } from 'protractor';


@Component({
  selector: 'app-dependancy',
  templateUrl: './dependancy.component.html',
  styleUrls: ['./dependancy.component.css'],
  providers: [LoggerService]
})
export class DependancyComponent implements OnInit {

  Training = "DCoE Dev";
  // customers data in loggerservice has been called here in ngoninit. 
  // means data is fetched through services
  customers;
  string = "MSME TERM LOAN";
  string1 = "msme Working Capital";
  today = new Date();
  promise: Promise<string>=null;
  a: number = 1;
  b: number = 87;
  price : number= 90;

  clickMe() {
    this.string1 = "Before promise : updated to new";
    this.promise = new Promise<string>((resolve, reject) => {
    setTimeout(function () {
    resolve("resolved");
    },1000);
  })
}
    

  // example for creating service -- loggerService
  // logging method is called from logger.service.ts  of LoggerService class
  constructor(private loggerService: LoggerService) { }

  ngOnInit(): void {
    // return shd be mandatorily present in logger.service.ts or else (this.Training) displays error
    // this.customers = this.loggerService.logging();
  }

  logger() {
    this.customers = this.loggerService.logging();
    // push displays array with value true or false.. true if even and false if odd
    // this.customers.push(this.loggerService.logging());
  }
}

