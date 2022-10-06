import { Module } from '@nestjs/common';
import { MatchModule } from 'src/match/match.module';

@Module({
  imports: [MatchModule]
})

export class AppModule {}
