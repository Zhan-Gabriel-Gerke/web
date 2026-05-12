import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MonitorsService } from './monitors.service';

@ApiTags('Monitors')
@Controller('monitors')
export class MonitorsController {
  constructor(private readonly monitorsService: MonitorsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all monitors' })
  @ApiResponse({ status: 200, description: 'List of monitors' })
  findAll() {
    return this.monitorsService.findAll();
  }
}
