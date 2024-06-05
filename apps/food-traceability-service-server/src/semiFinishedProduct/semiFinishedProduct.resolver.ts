import * as graphql from "@nestjs/graphql";
import { SemiFinishedProductResolverBase } from "./base/semiFinishedProduct.resolver.base";
import { SemiFinishedProduct } from "./base/SemiFinishedProduct";
import { SemiFinishedProductService } from "./semiFinishedProduct.service";

@graphql.Resolver(() => SemiFinishedProduct)
export class SemiFinishedProductResolver extends SemiFinishedProductResolverBase {
  constructor(protected readonly service: SemiFinishedProductService) {
    super(service);
  }
}
