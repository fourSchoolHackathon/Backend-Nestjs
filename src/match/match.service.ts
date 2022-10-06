import { Injectable } from '@nestjs/common';
import { MatchSuccessRequestDto } from 'src/match/dto/request/matchSuccessRequest.dto';
import { MatchSuccessResponseDto } from 'src/match/dto/response/matchSuccessResponse.dto';
import { plainToClass } from '@nestjs/class-transformer';
import { MatchGateway } from 'src/match/match.gateway';

@Injectable()
export class MatchService {
    constructor(private readonly matchGateway: MatchGateway) {}

    match(dto: MatchSuccessRequestDto): void {
        const matchSuccessDto = plainToClass(
            MatchSuccessResponseDto,
            {
                ...dto,
                phoneNumber: dto.phone_number
            },
            {excludeExtraneousValues: true}
        );

        this.matchGateway.matchSuccess(matchSuccessDto, dto.phone_number);
    }

}
