import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MatchRequestDto } from 'src/match/dto/request/matchRequest.dto';
import { MatchSuccessResponseDto } from 'src/match/dto/response/matchSuccessResponse.dto';

@WebSocketGateway({
    namespace: 'match',
    cors: true
})
export class MatchGateway implements OnGatewayConnection, OnGatewayDisconnect {

    constructor() {}

    @WebSocketServer()
    server: Server;

    private clients: {
        [index: string]: Socket
    } = {};

    handleConnection(): void {
        console.log('connected')
    }

    handleDisconnect(client: Socket): void {
        console.log('exit');
        delete this.clients[client.id];
    }

    @SubscribeMessage('match')
    match(client: Socket, data: MatchRequestDto): void {
        console.log('match start', data.phoneNumber);
        this.clients[data.phoneNumber] = client;
    }

    matchSuccess(dto: MatchSuccessResponseDto, phoneNumber: string) {
        console.log('match success', phoneNumber);
        const client: Socket = this.clients[phoneNumber];
        client.emit("matchSuccess", dto);
    }

}