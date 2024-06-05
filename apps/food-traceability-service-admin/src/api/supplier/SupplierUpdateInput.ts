import { RawMaterialUpdateManyWithoutSuppliersInput } from "./RawMaterialUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  address?: string | null;
  contact?: string | null;
  name?: string | null;
  rawMaterials?: RawMaterialUpdateManyWithoutSuppliersInput;
};
