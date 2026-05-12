import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Product extends Document {
  @ApiProperty({ example: 'Cheese' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ example: 4.44 })
  @Prop({ required: true })
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
