import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: []
})
export class TableComponent implements OnInit {
  @Input() volatilityData: any = [];
  public cols: any = [];
  public rows = 50;

  ngOnInit() {
    this.cols = [
      { field: 'symbol', header: 'Symbol' },
      { field: 'daily', header: 'Daily' },
      { field: 'yearly', header: 'Yearly' }
    ];
  }
}
