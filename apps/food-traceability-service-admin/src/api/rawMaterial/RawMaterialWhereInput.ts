import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type RawMaterialWhereInput = {
  acquiringDate?: DateTimeNullableFilter;
  batchNumber?: StringNullableFilter;
  documentNumber?: StringNullableFilter;
  expiringDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  quantity?: IntNullableFilter;
  supplier?: SupplierWhereUniqueInput;
  unitOfMeasure?: StringNullableFilter;
  unitPrice?: FloatNullableFilter;
};
