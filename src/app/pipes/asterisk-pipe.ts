import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'asteriskPipe'
})

export class AsteriskPipe  implements PipeTransform {
    transform( value: string ) : string {
        if(!value) {
            return "";
        }

        var finalResult = "";
        for(var i=0 ; i < value.length; i++) {
            var chr = value.charAt(i).toLowerCase();
            if(i>0 && i <= value.length-1 ) {
                finalResult=  finalResult + '*' + chr;
            }   
            else {
                finalResult = finalResult + chr;
            }
        }
        return finalResult;
    }

}