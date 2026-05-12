import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class Order extends Document {
  @ApiProperty({ example: 44.4 })
  @Prop({ required: true })
  totalPrice: number;

  @ApiProperty({ example: 'pending' })
  @Prop({ default: 'pending' })
  status: string;

  @ApiProperty({ type: [Object] })
  @Prop({ type: Array })
  products: any[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
