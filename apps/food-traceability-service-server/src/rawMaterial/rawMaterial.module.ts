import { Module } from "@nestjs/common";
import { RawMaterialModuleBase } from "./base/rawMaterial.module.base";
import { RawMaterialService } from "./rawMaterial.service";
import { RawMaterialController } from "./rawMaterial.controller";
import { RawMaterialResolver } from "./rawMaterial.resolver";

@Module({
  imports: [RawMaterialModuleBase],
  controllers: [RawMaterialController],
  providers: [RawMaterialService, RawMaterialResolver],
  exports: [RawMaterialService],
})
export class RawMaterialModule {}
