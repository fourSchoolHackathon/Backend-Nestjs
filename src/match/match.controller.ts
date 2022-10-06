import { Body, Controller, Post } from '@nestjs/common';
import { MatchSuccessRequestDto } from 'src/match/dto/request/matchSuccessRequest.dto';
import { MatchService } from 'src/match/match.service';

@Controller('match')
export class MatchController {
    constructor(private readonly matchService: MatchService) {}

    @Post()
    match(
        @Body() dto: MatchSuccessRequestDto
    ): void {
        this.matchService.match(dto);
    }

}
