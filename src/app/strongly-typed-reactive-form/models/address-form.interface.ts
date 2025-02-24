import { FormControl } from "@angular/forms";

export interface AddressForm {
    street: FormControl<string>;
    city: FormControl<string>;
    state: FormControl<string>;
    zipCode: FormControl<number>;
}