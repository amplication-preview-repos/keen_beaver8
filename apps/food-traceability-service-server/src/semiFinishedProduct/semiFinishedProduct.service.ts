import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SemiFinishedProductServiceBase } from "./base/semiFinishedProduct.service.base";

@Injectable()
export class SemiFinishedProductService extends SemiFinishedProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
