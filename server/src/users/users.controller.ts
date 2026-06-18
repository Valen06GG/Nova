import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/roles.decorators';
import { UsersService } from './users.service';



@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService,
    ) {}

    @Get()
    @UseGuards(
        JwtAuthGuard, 
        RolesGuard,
    )
    @Roles('admin')
    getUsers() {
        return this.userService.findAll();
    }

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    getProfile(@Req() req: any) {
        return req.user;
    }

    @Get('admin')
    @UseGuards(
        JwtAuthGuard,
        RolesGuard,
    )
    @Roles('admin')
    getAdminData() {
        return {
            message: 'Welcome admin,'
        }
    }

    @Get(':id')
    @UseGuards(
        JwtAuthGuard,
        RolesGuard,
    )
    @Roles('admin')
    getUserById(
        @Param('id') id: string,
    ) {
        return this.userService.findOne(
            Number(id),
        );
    }
}