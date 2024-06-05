import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RawMaterialListRelationFilter } from "../rawMaterial/RawMaterialListRelationFilter";

export type SupplierWhereInput = {
  address?: StringNullableFilter;
  contact?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  rawMaterials?: RawMaterialListRelationFilter;
};
