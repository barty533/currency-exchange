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
  

  public fetchData(x: string){
    this.baseCurrency = x;
    this.httpClient
    .get(`https://v6.exchangerate-api.com/v6/43a2f1eab64bc6d03082e443/latest/${this.baseCurrency}`)
    .subscribe((data: any)=>{
      this.data = data;  
    });}

  


}
