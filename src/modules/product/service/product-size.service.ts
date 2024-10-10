import { Injectable } from "@nestjs/common";
import { AddSizeDto, UpdateSizeDto } from "../dto/size.dto";

@Injectable()
export class ProductSizeService {
  create(sizeDto: AddSizeDto) {
    throw new Error("Method not implemented.");
  }

  find(productId: number) {
    throw new Error("Method not implemented.");
  }

  update(id: number, sizeDto: UpdateSizeDto) {
    throw new Error("Method not implemented.");
  }
  delete(id: number) {
    throw new Error("Method not implemented.");
  }
}
