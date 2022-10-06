import { IsNumber, IsString } from "class-validator";

export class MatchRequestDto {

    @IsString()
    userId: string;

    @IsString()
    name: string;

    @IsNumber()
    latitude: number;

    @IsNumber()
    longitude: number;

}