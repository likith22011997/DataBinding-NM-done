import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {
  discount: number = 0;
  total: number =  0;

  transform(value: any, args?: any): any {
    this.discount=((value*20)/100);
    this.total = value-this.discount;
    return this.total;
  }
}
