import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RawMaterialServiceBase } from "./base/rawMaterial.service.base";

@Injectable()
export class RawMaterialService extends RawMaterialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
