import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entites/product.entity";
import { ProductColor } from "./entites/product-color.entity";
import { ProductSize } from "./entites/product-size.entity";
import { ProductDetail } from "./entites/product-detail.entity";
import { ProductController } from "./controller/product.controller";
import { ProductSizeController } from "./controller/product-size.controller";
import { ProductColorController } from "./controller/product-color.controller";
import { ProductDetailController } from "./controller/product-detail.controller";
import { ProductService } from "./service/product.service";
import { ProductColorService } from "./service/product-color.service";
import { ProductDetailService } from "./service/product-detail.service";
import { ProductSizeService } from "./service/product-size.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      ProductColor,
      ProductSize,
      ProductDetail,
    ]),
  ],
  controllers: [
    ProductController,
    ProductSizeController,
    ProductColorController,
    ProductDetailController,
  ],
  providers: [
    ProductService,
    ProductDetailService,
    ProductSizeService,
    ProductColorService,
  ],
  exports: [
    ProductService,
    ProductDetailService,
    ProductSizeService,
    ProductColorService,
    TypeOrmModule,
  ],
})
export class ProductModule {}
