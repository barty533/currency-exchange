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
  BaseCurrId: any;
  TargetCurrId: any;
  targetCurrency: any;
  amountComp : any;
  amountForm : any;
  registrationForm;
  exchange: any;


  ngOnInit(): void 
  {
    
    this.changeBaseCurr('PLN');
    this.TargetCurrId= "USD";
    let currencies = Object.keys(this.dataDisplay.data.conversion_rates || {}); 
    this.items = currencies;    
  }

  public changeBaseCurr(BaseCurrId: any){
    
    this.dataDisplay.fetchData(BaseCurrId);
    this.BaseCurrId = BaseCurrId
    
    setTimeout(() => {
      this.changeTargetCurr(this.TargetCurrId);
     
    }, 300);


   
  }
  
  public changeTargetCurr(TargetCurrId: any ){

    let targetCurrency = this.dataDisplay.data.conversion_rates[TargetCurrId] ;
    this.targetCurrency = targetCurrency;
    this.TargetCurrId=TargetCurrId;
    console.log(targetCurrency);
    console.log(TargetCurrId);

  }

  public showDiv(){
    document.getElementById('exchangeResult')!.style.display = "block";
    document.getElementById("exchangeBtn")!.remove();
    
  }

  constructor(fb: FormBuilder) {
    this.registrationForm = fb.group({
        amount: [1, { nonNullable: true, validators: [Validators.required] }],
        
    });
}
public get amount() {
  return this.registrationForm.get('amount');
}
 
public switchCurr(){
  
  let baseCurrTemp = this.BaseCurrId;
  this.changeBaseCurr(this.TargetCurrId)
  this.changeTargetCurr(baseCurrTemp)

}



}
