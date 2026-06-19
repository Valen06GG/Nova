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

  async update(
    id: number,
    data: Partial<User>,
  ) {
    await this.userRepository.update(
      id,
      data,
    );
    
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.userRepository.delete(id);

    return {
      message: 'User deleted successfullly',
    };
  }
}