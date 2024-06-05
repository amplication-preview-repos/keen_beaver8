import { RawMaterial as TRawMaterial } from "../api/rawMaterial/RawMaterial";

export const RAWMATERIAL_TITLE_FIELD = "name";

export const RawMaterialTitle = (record: TRawMaterial): string => {
  return record.name?.toString() || String(record.id);
};
