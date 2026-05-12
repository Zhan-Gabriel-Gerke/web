import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { MonitorsModule } from './monitors/monitors.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/webdb'),
    ProductsModule,
    OrdersModule,
    MonitorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
