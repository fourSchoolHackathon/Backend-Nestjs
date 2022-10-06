import { Body, Controller, Post } from '@nestjs/common';
import { MatchRequestDto } from 'src/match/dto/request/matchRequest.dto';
import { MatchResponseDto } from 'src/match/dto/response/matchResponse.dto';
import { MatchService } from 'src/match/match.service';

@Controller('match')
export class MatchController {
    constructor(private readonly matchService: MatchService) {}

    @Post()
    match(
        @Body() dto: MatchRequestDto
    ): MatchResponseDto {
        return this.matchService.match(dto);
    }

}
