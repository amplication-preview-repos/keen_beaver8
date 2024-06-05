import { SortOrder } from "../../util/SortOrder";

export type RawMaterialOrderByInput = {
  acquiringDate?: SortOrder;
  batchNumber?: SortOrder;
  createdAt?: SortOrder;
  documentNumber?: SortOrder;
  expiringDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  quantity?: SortOrder;
  supplierId?: SortOrder;
  unitOfMeasure?: SortOrder;
  unitPrice?: SortOrder;
  updatedAt?: SortOrder;
};
