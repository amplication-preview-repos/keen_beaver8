import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SemiFinishedProductService } from "./semiFinishedProduct.service";
import { SemiFinishedProductControllerBase } from "./base/semiFinishedProduct.controller.base";

@swagger.ApiTags("semiFinishedProducts")
@common.Controller("semiFinishedProducts")
export class SemiFinishedProductController extends SemiFinishedProductControllerBase {
  constructor(protected readonly service: SemiFinishedProductService) {
    super(service);
  }
}
