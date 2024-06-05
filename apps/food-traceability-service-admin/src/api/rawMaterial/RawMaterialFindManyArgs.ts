import { RawMaterialWhereInput } from "./RawMaterialWhereInput";
import { RawMaterialOrderByInput } from "./RawMaterialOrderByInput";

export type RawMaterialFindManyArgs = {
  where?: RawMaterialWhereInput;
  orderBy?: Array<RawMaterialOrderByInput>;
  skip?: number;
  take?: number;
};
