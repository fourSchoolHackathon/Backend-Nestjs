import { IsString } from "class-validator";

export class MatchRequestDto {

    @IsString()
    phoneNumber: string;

}