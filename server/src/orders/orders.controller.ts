import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
    constructor(
        private readonly ordersService: OrdersService,
    ) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    create(
        @Req() req, any,
        @Body() dto: CreateOrderDto,
    ) {
        return this.ordersService.create(
            req.user.id, 
            dto
        );
    }

    @Get('me')
    @UseGuards(JwtAuthGuard)
    myOrders(
        @Req() req, any,
    ) {
        return this.ordersService.findMyOrders(
            req.user.id
        );
    }

    @Get()
    findAll() {
        return this.ordersService.findAll();
    }
}
