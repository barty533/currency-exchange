import { Component, inject, OnInit } from '@angular/core';
import { DataDisplayComponent } from '../data-display/data-display.component';
import { IGX_DROP_DOWN_DIRECTIVES, IgxToggleActionDirective, IgxButtonDirective} from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor} from '@angular/common';
@Component({
  selector: 'app-currency-exchange',
  standalone: true,
  imports: [CommonModule, IGX_DROP_DOWN_DIRECTIVES, IgxToggleActionDirective, IgxButtonDirective],
  templateUrl: './currency-exchange.component.html',
  styleUrl: './currency-exchange.component.css'
})
export class CurrencyExchangeComponent implements OnInit {
  private dataDisplay = inject(DataDisplayComponent);
  public items: Array<string> = [];
  baseCurrency: any;
  element: any;
  ngOnInit(): void 
  {
    
    this.dataDisplay.fetchData("PLN");
    let currencies = Object.keys(this.dataDisplay.data.conversion_rates || {}); 
    this.items = currencies;
    
  }

  public changeBaseCurr(element: any){
    this.dataDisplay.fetchData(element);
  }
  
  public changeTargetCurr(element: any){

  }


  
}
