import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateProductDto, UpdateProductDto } from "../dto/product.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "../entites/product.entity";
import { DeepPartial, Repository } from "typeorm";
import { ProductType } from "../enum/type.enum";
import { toBoolean } from "src/utils/functions";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>
  ) {}
  async create(productDto: CreateProductDto) {
    const {
      title,
      slug,
      active_discount,
      code,
      content,
      count,
      discount,
      price,
      type,
    } = productDto;
    const productObject: DeepPartial<Product> = {
      title,
      content,
      slug,
      code,
      discount,
      active_discount: toBoolean(active_discount),
    };

    if (type === ProductType.Single) {
      Object.assign(productObject, { price, count, type });
    } else if ([ProductType.Coloring, ProductType.Sizing].includes(type as any))
      productObject["type"] = type;
    else throw new BadRequestException("product type is invalid");

    await this.productRepository.save(productObject);
    return {
      message: "created product successful",
    };
  }

  find() {
    throw new Error("Method not implemented.");
  }

  findOne(id: number) {
    throw new Error("Method not implemented.");
  }

  update(id: number, productDto: UpdateProductDto) {
    throw new Error("Method not implemented.");
  }

  delete(id: number) {
    throw new Error("Method not implemented.");
  }
}
