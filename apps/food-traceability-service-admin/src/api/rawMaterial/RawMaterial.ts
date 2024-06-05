import { Supplier } from "../supplier/Supplier";

export type RawMaterial = {
  acquiringDate: Date | null;
  batchNumber: string | null;
  createdAt: Date;
  documentNumber: string | null;
  expiringDate: Date | null;
  id: string;
  name: string | null;
  quantity: number | null;
  supplier?: Supplier | null;
  unitOfMeasure: string | null;
  unitPrice: number | null;
  updatedAt: Date;
};
