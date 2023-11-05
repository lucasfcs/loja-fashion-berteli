import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WhitdrawMovementDto } from './dto/whitdraw-movement.dto';
import { MovementsService } from './movements.service';

@ApiTags('movement')
@Controller('movements')
export class MovementsController {
  constructor(private readonly movementsService: MovementsService) {}
  @Post()
  async whitdrawMovement(@Body() data: WhitdrawMovementDto): Promise<any> {
    await this.movementsService.whitdrawMovement(data);
  }

  // @Get()
  // async getAllMovementWhitdraw(@Body() data: any): Promise<any> {
  //   await this.movementsService.getAllMovementWhitdraw(data);
  // }
}
