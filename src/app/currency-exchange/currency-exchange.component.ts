import { Component, inject, OnInit, NgModule } from '@angular/core';
import { DataDisplayComponent } from '../data-display/data-display.component';
import { IGX_DROP_DOWN_DIRECTIVES, IgxToggleActionDirective, IgxButtonDirective, IgxInputGroupModule} from 'igniteui-angular';
import { FormControl, FormsModule, ReactiveFormsModule, FormBuilder, Form } from '@angular/forms';
import { CommonModule, NgFor} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '../app.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-currency-exchange',
  standalone: true,
  imports: [CommonModule, IGX_DROP_DOWN_DIRECTIVES, 
    IgxToggleActionDirective, IgxButtonDirective,
    FormsModule,
    IgxInputGroupModule, ReactiveFormsModule],
  templateUrl: './currency-exchange.component.html',
  styleUrl: './currency-exchange.component.css'
})
//_____________________________________________________

export class CurrencyExchangeComponent implements OnInit {

  private dataDisplay = inject(DataDisplayComponent);
  public items: Array<string> = [];
  baseCurrency: any;
  element: any;
  CurrId: any;
  targetCurrency: any;
  amountComp : any;
  amountForm : any;
  registrationForm;


  ngOnInit(): void 
  {
    
    this.dataDisplay.fetchData("PLN");
    
    let currencies = Object.keys(this.dataDisplay.data.conversion_rates || {}); 
    this.items = currencies;
   
    
  }

  public changeBaseCurr(element: any){
    
    this.dataDisplay.fetchData(element);
    setTimeout(() => {
      this.changeTargetCurr(this.CurrId);
    }, 150);
   
  }
  
  public changeTargetCurr(CurrId: any){
    
    let targetCurrency = this.dataDisplay.data.conversion_rates[CurrId];
    this.targetCurrency = targetCurrency;
    this.CurrId=CurrId;
    console.log(targetCurrency);
    console.log(CurrId)
  }



  public Exchange(){
    let amountComp = this.amount?.value || 1;

    let exchange = amountComp * this.targetCurrency;
    console.log(exchange);
  }

  constructor(fb: FormBuilder) {
    this.registrationForm = fb.group({
        amount: [1, { nonNullable: true, validators: [Validators.required] }]
    });
}
public get amount() {
  return this.registrationForm.get('amount');
}
 
}
