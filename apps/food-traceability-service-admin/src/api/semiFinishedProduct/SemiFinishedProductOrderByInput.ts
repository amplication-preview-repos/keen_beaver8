import { SortOrder } from "../../util/SortOrder";

export type SemiFinishedProductOrderByInput = {
  batchNumber?: SortOrder;
  createdAt?: SortOrder;
  expiringDate?: SortOrder;
  id?: SortOrder;
  ingredients?: SortOrder;
  name?: SortOrder;
  productionDate?: SortOrder;
  quantity?: SortOrder;
  unitOfMeasure?: SortOrder;
  updatedAt?: SortOrder;
};
