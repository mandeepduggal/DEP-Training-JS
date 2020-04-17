import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(user: unknown): unknown {
    return user["firstName"]+" "+user["lastName"];
  }

}
