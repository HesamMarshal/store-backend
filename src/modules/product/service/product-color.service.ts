import { Injectable } from "@nestjs/common";
import { AddColorDto, UpdateColorDto } from "../dto/color.dto";

@Injectable()
export class ProductColorService {
  create(colorDto: AddColorDto) {
    throw new Error("Method not implemented.");
  }
  delete(id: number) {
    throw new Error("Method not implemented.");
  }
  update(id: number, colorDto: UpdateColorDto) {
    throw new Error("Method not implemented.");
  }
  find(productId: number) {
    throw new Error("Method not implemented.");
  }
}
