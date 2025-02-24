import { AddressForm } from "./address-form.interface";
import { UserForm } from "./user-form.interface";

export interface MainForm {
    userForm: UserForm;
    addressForm: AddressForm;
}