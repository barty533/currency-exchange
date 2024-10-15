import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataDisplayComponent } from './data-display/data-display.component';
import { FormsModule } from '@angular/forms';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataDisplayComponent,CurrencyExchangeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'currency-exchange';
  
}
