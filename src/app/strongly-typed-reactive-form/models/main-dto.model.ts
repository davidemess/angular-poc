import { AddressDto } from './address-dto.model';
import { UserDto } from './user-dto.model';

export class MainDto {
  user: UserDto = new UserDto();
  address: AddressDto = new AddressDto();
}
