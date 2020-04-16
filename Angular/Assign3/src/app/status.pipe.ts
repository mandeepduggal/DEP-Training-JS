import { Pipe, PipeTransform } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(anchorName: unknown, ...args: unknown[]): unknown {
    // console.log("BABA  = "+anchorName != "Manage"?(anchorName == "Activate"?"Deactivate":"Activate"):"Detail")
    if(args[0] == "buttonName")
    return anchorName != "Manage"?(anchorName == "Activate"?"Deactivate":"Activate"):"Detail";
    return null;
  }

}
