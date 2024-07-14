import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersTableComponent } from './components/customers-table/customers-table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './Services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { NameSearchPipe } from './Pipes/name-search.pipe';
import { AmountSearchPipe } from './Pipes/amount-search.pipe';
import { NgChartsModule } from 'ng2-charts';
import { TransactionChartComponent } from './components/transaction-chart/transaction-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomersTableComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    NameSearchPipe,
    AmountSearchPipe,
    TransactionChartComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
