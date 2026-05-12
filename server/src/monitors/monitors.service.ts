import { Injectable } from '@nestjs/common';

@Injectable()
export class MonitorsService {
  private readonly monitors = [
    {
      id: 1,
      inc: 34,
      screen_type: 'OLED',
      manufacture: 'Samsung',
      refresh_rate: 175,
      is_curved: true,
    },
    {
      id: 2,
      inc: 27,
      screen_type: 'IPS',
      manufacture: 'LG',
      refresh_rate: 144,
      is_curved: false,
    },
    {
      id: 3,
      inc: 49,
      screen_type: 'VA',
      manufacture: 'ASUS',
      refresh_rate: 240,
      is_curved: true,
    },
    {
      id: 4,
      inc: 24,
      screen_type: 'IPS',
      manufacture: 'Dell',
      refresh_rate: 60,
      is_curved: false,
    },
    {
      id: 5,
      inc: 32,
      screen_type: 'OLED',
      manufacture: 'Alienware',
      refresh_rate: 240,
      is_curved: true,
    },
  ];

  findAll() {
    return this.monitors;
  }
}
