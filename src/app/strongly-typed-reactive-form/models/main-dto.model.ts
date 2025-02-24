import { AddressDto } from './address-dto.model';
import { UserDto } from './user-dto.model';

export class MainDto {
  userForm: UserDto = new UserDto();
  addressForm: AddressDto = new AddressDto();
}
