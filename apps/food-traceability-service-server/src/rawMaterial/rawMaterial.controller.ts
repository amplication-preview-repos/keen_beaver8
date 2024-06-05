import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RawMaterialService } from "./rawMaterial.service";
import { RawMaterialControllerBase } from "./base/rawMaterial.controller.base";

@swagger.ApiTags("rawMaterials")
@common.Controller("rawMaterials")
export class RawMaterialController extends RawMaterialControllerBase {
  constructor(protected readonly service: RawMaterialService) {
    super(service);
  }
}
