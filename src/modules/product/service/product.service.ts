import { Injectable } from "@nestjs/common";
import { CreateProductDto, UpdateProductDto } from "../dto/product.dto";

@Injectable()
export class ProductService {
  create(productDto: CreateProductDto) {
    throw new Error("Method not implemented.");
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
