import { Component, inject, OnInit, Injectable } from '@angular/core';
import { CommonModule, NgFor} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({providedIn: 'root',})


@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css'
})

export class DataDisplayComponent {
  httpClient = inject(HttpClient);
  data: any = [];
  
  
  baseCurrency: any;
  currencies: any;
  selectedCurrency: any;
  

  public fetchData(){
    this.baseCurrency = "PLN";
    this.httpClient
    .get(`https://v6.exchangerate-api.com/v6/4a1002a8dd6dc26134f653ce/latest/${this.baseCurrency}`)
    .subscribe((data: any)=>{
      console.log(data);
      this.data = data;  
    });}

    


}
