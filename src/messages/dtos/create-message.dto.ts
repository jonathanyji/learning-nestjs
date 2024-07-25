/*  
    Dto = Data Transfer Object
    It is a class that describes the different
    properties that the request body should have

    It carries data between Request and the Route Handler (controller)

    Similiar to Models or 
    BiometricRequest/BiometricResponse class in Java
*/

import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString() // Validate if content is a string (using class-validator plugin)
  content: string;
}
