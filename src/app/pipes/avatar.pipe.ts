import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatar'
})
export class AvatarPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if(value == undefined || value == null || value == ""){
      return "assets/img/no-image.png"
    }
    return value;
  }

}
