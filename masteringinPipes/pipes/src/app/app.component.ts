import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  name: string = '';
  paymentDate: string = '';
  amount: number | undefined;
  height: number | undefined;
  miles: number | undefined;

  person: any = {
    name: 'pratik jare',
    address: 'satara',
    dob: '14/08/1995',
  }

  onNameChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  onDateChange(event: Event) {
    this.paymentDate = (event.target as HTMLInputElement).value;
  }

  onAmountChange(event: Event) {
    this.amount = parseFloat((event.target as HTMLInputElement).value);
  }

  onHeightChange(event: Event) {
    this.height = parseFloat((event.target as HTMLInputElement).value);
  }


  onMilesChange(event: Event) {
    this.miles = parseFloat((event.target as HTMLInputElement).value);
  }



}
