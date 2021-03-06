import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedTheme = '';
  dataFieldNames = ['id', 'title'];
  displayedColumns: string[] = ['id', 'title'];
  data;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    // API Call via service (in larger applications, add this to own componnent and keep app.component as a container)
    this.data = this.dataService.getPosts().subscribe(
      (data) => {
        console.log(data);
        this.data = data;
    });
  }
}
