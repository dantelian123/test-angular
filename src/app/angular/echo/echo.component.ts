import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echo',
  templateUrl: './echo.component.html',
  styleUrls: ['./echo.component.css'],
})
export class EchoComponent implements OnInit {
  input:string="";
  constructor() {}

  ngOnInit(): void {}
}
