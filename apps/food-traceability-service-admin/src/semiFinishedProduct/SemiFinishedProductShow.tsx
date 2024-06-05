import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const SemiFinishedProductShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="batchNumber" source="batchNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="expiringDate" source="expiringDate" />
        <TextField label="ID" source="id" />
        <TextField label="Ingredients" source="ingredients" />
        <TextField label="name" source="name" />
        <TextField label="productionDate" source="productionDate" />
        <TextField label="quantity" source="quantity" />
        <TextField label="unitOfMeasure" source="unitOfMeasure" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
