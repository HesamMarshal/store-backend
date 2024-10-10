import { Injectable } from "@nestjs/common";
import { AddDetailDto, UpdateDetailDto } from "../dto/detail.dto";

@Injectable()
export class ProductDetailService {
  create(detailDto: AddDetailDto) {
    throw new Error("Method not implemented.");
  }

  find(productId: number) {
    throw new Error("Method not implemented.");
  }

  update(id: number, detailDto: UpdateDetailDto) {
    throw new Error("Method not implemented.");
  }

  delete(id: number) {
    throw new Error("Method not implemented.");
  }
}
