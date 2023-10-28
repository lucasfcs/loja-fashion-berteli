import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class MovementsService {
  constructor(private readonly prismaService: PrismaService) {}
  async CreateEntrance(data: any): Promise<any> {
    const x = await this.prismaService.movements.create({
      data: {},
    });
  }
}
