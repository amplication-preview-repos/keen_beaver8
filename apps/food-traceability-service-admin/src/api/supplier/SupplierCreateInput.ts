import { RawMaterialCreateNestedManyWithoutSuppliersInput } from "./RawMaterialCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  address?: string | null;
  contact?: string | null;
  name?: string | null;
  rawMaterials?: RawMaterialCreateNestedManyWithoutSuppliersInput;
};
