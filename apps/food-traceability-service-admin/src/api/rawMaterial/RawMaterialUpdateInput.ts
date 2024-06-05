import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type RawMaterialUpdateInput = {
  acquiringDate?: Date | null;
  batchNumber?: string | null;
  documentNumber?: string | null;
  expiringDate?: Date | null;
  name?: string | null;
  quantity?: number | null;
  supplier?: SupplierWhereUniqueInput | null;
  unitOfMeasure?: string | null;
  unitPrice?: number | null;
};
