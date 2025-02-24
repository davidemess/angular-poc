import { FormControl } from "@angular/forms";

export interface UserForm {
    firstName: FormControl<string>;
    lastName: FormControl<string>;
}