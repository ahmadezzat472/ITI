import { Pipe, PipeTransform } from '@angular/core';

// Decorator [MetaData] [Information]
@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {

  transform(value: string, ...args: string[]/**['*'] */): unknown {
    // console.log(value);
    console.log(args);
    // return value.split("").join(args[0]?args[0]:"&");//["A","h","m","e","d"]==>'A,h,m,e,d'
    return value.split("").join(args[0]||"&");//["A","h","m","e","d"]==>'A,h,m,e,d'
  }

}
