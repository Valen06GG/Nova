import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly jwtService: JwtService,
    ) {}

    async register(
        registerDto:RegisterDto
    ) {
        const existingUser = 
          await this.userRepository.findOne({ 
            where: { 
                email: registerDto.email 
            }, 
          });

          if (existingUser) {
            throw new BadRequestException(
                'Email already in use',
            );
          }

          const hashedPassword = 
            await bcrypt.hash(
                registerDto.password,
                10,
            );

          const user =
            this.userRepository.create({
              name: registerDto.name,
              email: registerDto.email,
              password: hashedPassword,
            });  
            await this.userRepository.save(user);  
            return {
              message: 'User registered successfully',
            };
    }

    async login(
      loginDto: LoginDto,
    ) {
        const user = await this.userRepository.findOne({
            where: {
                email: loginDto.email,
            },
        });

        if (!user) {
            throw new BadRequestException(
                'Invalid credentials',
            );
        }

        const isPasswordValid =
          await bcrypt.compare(
              loginDto.password,
              user.password,
          );

        if (!isPasswordValid) {
            throw new BadRequestException(
                'Invalid credentials',
            );
        }

        const payload = {
          sub: user.id,
          email: user.email,
          role: user.role,
        };

        return {
          access_token:
            await this.jwtService.signAsync(payload),
        };
    }
}
