import { SemiFinishedProductWhereInput } from "./SemiFinishedProductWhereInput";
import { SemiFinishedProductOrderByInput } from "./SemiFinishedProductOrderByInput";

export type SemiFinishedProductFindManyArgs = {
  where?: SemiFinishedProductWhereInput;
  orderBy?: Array<SemiFinishedProductOrderByInput>;
  skip?: number;
  take?: number;
};
