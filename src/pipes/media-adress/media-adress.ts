import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MediaAdressPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'mediaAdress',
})
export class MediaAdressPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    return 'http://media.mw.metropolia.fi/wbma/uploads/' + value;
  }
}
