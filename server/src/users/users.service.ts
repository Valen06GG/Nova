import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find({
      select: [
        'id',
        'name',
        'email',
        'role',
        'createdAt',
      ],
    });
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      where: { id },
    });
  }
}