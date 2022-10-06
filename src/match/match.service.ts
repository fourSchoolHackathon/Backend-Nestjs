import { Injectable } from '@nestjs/common';
import { MatchSuccessRequestDto } from 'src/match/dto/request/matchSuccessRequest.dto';
import { MatchSuccessResponseDto } from 'src/match/dto/response/matchSuccessResponse.dto';
import { plainToClass } from '@nestjs/class-transformer';
import { MatchGateway } from 'src/match/match.gateway';

@Injectable()
export class MatchService {
    constructor(private readonly matchGateway: MatchGateway) {}

    match(dto: MatchSuccessRequestDto): void {
        this.matchGateway.matchSuccess(
            plainToClass(MatchSuccessResponseDto, dto, {excludeExtraneousValues: true}),
            dto.phoneNumber
        );
    }

}
