import { Module } from '@nestjs/common';
import { MatchController } from 'src/match/match.controller';
import { MatchService } from 'src/match/match.service';

@Module({
    controllers: [MatchController],
    providers: [MatchService]
})

export class MatchModule {}
