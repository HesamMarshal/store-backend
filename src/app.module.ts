import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductModule } from "./modules/product/product.module";
import { DiscountModule } from "./modules/dicscount/discount.module";
import { BasketModule } from "./modules/basket/basket.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "onlinestore",
      autoLoadEntities: false,
      synchronize: true,
      entities: [
        "dist/**/**/**/*.entity{.ts,.js}",
        "dist/**/**/*.entity{.ts,.js}",
      ],
    }),
    ProductModule,
    DiscountModule,
    BasketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
