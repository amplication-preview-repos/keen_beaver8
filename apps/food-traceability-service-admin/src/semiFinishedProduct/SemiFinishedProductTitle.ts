import { SemiFinishedProduct as TSemiFinishedProduct } from "../api/semiFinishedProduct/SemiFinishedProduct";

export const SEMIFINISHEDPRODUCT_TITLE_FIELD = "name";

export const SemiFinishedProductTitle = (
  record: TSemiFinishedProduct
): string => {
  return record.name?.toString() || String(record.id);
};
