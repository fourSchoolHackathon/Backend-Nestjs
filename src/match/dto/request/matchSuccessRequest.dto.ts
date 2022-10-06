import { IsNumber, IsString } from "class-validator";

export class MatchSuccessRequestDto {

    @IsString()
    name: string;

    @IsNumber()
    latitude: number;

    @IsNumber()
    longitude: number;

    @IsString()
    phone_number: string;

}