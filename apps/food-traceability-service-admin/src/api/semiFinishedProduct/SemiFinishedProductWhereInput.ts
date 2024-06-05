import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SemiFinishedProductWhereInput = {
  batchNumber?: StringNullableFilter;
  expiringDate?: DateTimeNullableFilter;
  id?: StringFilter;
  ingredients?: StringNullableFilter;
  name?: StringNullableFilter;
  productionDate?: DateTimeNullableFilter;
  quantity?: IntNullableFilter;
  unitOfMeasure?: StringNullableFilter;
};
