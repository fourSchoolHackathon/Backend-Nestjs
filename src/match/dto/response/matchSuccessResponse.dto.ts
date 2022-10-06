import { Expose } from "@nestjs/class-transformer";

export class MatchSuccessResponseDto {

    @Expose()
    name: string;

    @Expose()
    latitude: number;

    @Expose()
    longitude: number;

}