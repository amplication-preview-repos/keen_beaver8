import { RawMaterial } from "../rawMaterial/RawMaterial";

export type Supplier = {
  address: string | null;
  contact: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  rawMaterials?: Array<RawMaterial>;
  updatedAt: Date;
};
