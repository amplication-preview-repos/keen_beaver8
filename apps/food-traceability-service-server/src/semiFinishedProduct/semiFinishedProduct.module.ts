import { Module } from "@nestjs/common";
import { SemiFinishedProductModuleBase } from "./base/semiFinishedProduct.module.base";
import { SemiFinishedProductService } from "./semiFinishedProduct.service";
import { SemiFinishedProductController } from "./semiFinishedProduct.controller";
import { SemiFinishedProductResolver } from "./semiFinishedProduct.resolver";

@Module({
  imports: [SemiFinishedProductModuleBase],
  controllers: [SemiFinishedProductController],
  providers: [SemiFinishedProductService, SemiFinishedProductResolver],
  exports: [SemiFinishedProductService],
})
export class SemiFinishedProductModule {}
