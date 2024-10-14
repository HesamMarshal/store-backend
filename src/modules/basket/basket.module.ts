import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Basket } from "./entity/basket.entity";
import { BasketController } from "./basket.controller";
import { ProductModule } from "../product/product.module";
import { DiscountModule } from "../dicscount/discount.module";
import { BasketService } from "./basket.service";

@Module({
  imports: [ProductModule, DiscountModule, TypeOrmModule.forFeature([Basket])],
  controllers: [BasketController],
  providers: [BasketService],
})
export class BasketModule {}
