import { Injectable } from '@nestjs/common';
import { MatchRequestDto } from 'src/match/dto/request/matchRequest.dto';
import { MatchResponseDto } from 'src/match/dto/response/matchResponse.dto';
import { plainToClass } from '@nestjs/class-transformer';

@Injectable()
export class MatchService {
    constructor() {}

    match(dto: MatchRequestDto): MatchResponseDto  {
        return plainToClass(MatchResponseDto, dto, {excludeExtraneousValues: true});
    }

}
