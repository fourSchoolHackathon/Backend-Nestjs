import { Expose } from "@nestjs/class-transformer";

export class MatchResponseDto {

    @Expose()
    name: string;

    @Expose()
    latitude: number;

    @Expose()
    longitude: number;

}