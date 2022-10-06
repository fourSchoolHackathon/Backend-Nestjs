import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { NotFoundException } from '@nestjs/common';
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

    handleConnection(): void {}

    handleDisconnect(client: Socket): void {
        delete this.clients[client.id];
    }

    @SubscribeMessage('match')
    match(client: Socket, data: MatchRequestDto): void {
        this.clients[data.phoneNumber] = client;
    }

    matchSuccess(dto: MatchSuccessResponseDto, phoneNumber: string) {
        const client: Socket = this.clients[phoneNumber];
        if (!client) throw new NotFoundException('Client not found');
        client.emit("matchSuccess", dto);
    }

}