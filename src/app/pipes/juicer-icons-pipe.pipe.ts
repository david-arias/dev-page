import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'juicerIcons'
})
export class JuicerIconsPipe implements PipeTransform {

  transform(value: any): any {

    let iconClass = "";

    if (value == "Facebook") {
      iconClass = "icm-socialFb"
    } else if (value == "Twitter") {
      iconClass = "icm-socialTw"
    } else if (value == "Instagram") {
      iconClass = "icm-socialIn"
    } else if (value == "Pinterest") {
      iconClass = "icm-socialPn"
    } else if (value == "YouTube") {
      iconClass = "icm-socialYt"
    } else if (value == "LinkedIn") {
      iconClass = "icm-socialLi"
    } else if (value == "GooglePlus") {
      iconClass = "icm-socialGp"
    }

    return iconClass;
  }

}
