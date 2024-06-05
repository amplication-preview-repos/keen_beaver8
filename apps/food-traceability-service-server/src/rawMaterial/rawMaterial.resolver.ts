import * as graphql from "@nestjs/graphql";
import { RawMaterialResolverBase } from "./base/rawMaterial.resolver.base";
import { RawMaterial } from "./base/RawMaterial";
import { RawMaterialService } from "./rawMaterial.service";

@graphql.Resolver(() => RawMaterial)
export class RawMaterialResolver extends RawMaterialResolverBase {
  constructor(protected readonly service: RawMaterialService) {
    super(service);
  }
}
