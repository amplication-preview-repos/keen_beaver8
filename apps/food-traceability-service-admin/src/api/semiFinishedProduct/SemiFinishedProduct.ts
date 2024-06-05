export type SemiFinishedProduct = {
  batchNumber: string | null;
  createdAt: Date;
  expiringDate: Date | null;
  id: string;
  ingredients: string | null;
  name: string | null;
  productionDate: Date | null;
  quantity: number | null;
  unitOfMeasure: string | null;
  updatedAt: Date;
};
