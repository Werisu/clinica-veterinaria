import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS } from '@angular/forms';
import { CpfCnpjValidator } from '../helpers/cpf-cnpj-validator';

@Directive({
  selector: '[appCpfCnpj][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CpfCnpjDirective,
    multi: true
  }]
})
export class CpfCnpjDirective extends CpfCnpjValidator implements Validator {

}
