import { Module } from '@nestjs/common';
import { MatchController } from 'src/match/match.controller';
import { MatchGateway } from 'src/match/match.gateway';
import { MatchService } from 'src/match/match.service';

@Module({
    controllers: [MatchController],
    providers: [MatchService, MatchGateway]
})

export class MatchModule {}
