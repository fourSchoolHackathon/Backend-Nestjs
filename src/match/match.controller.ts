import { Body, Controller, Post, HttpCode } from '@nestjs/common';
import { MatchSuccessRequestDto } from 'src/match/dto/request/matchSuccessRequest.dto';
import { MatchService } from 'src/match/match.service';

@Controller('match')
export class MatchController {
    constructor(private readonly matchService: MatchService) {}

    @HttpCode(200)
    @Post()
    match(
        @Body() dto: MatchSuccessRequestDto
    ): void {
        this.matchService.match(dto);
    }

}
