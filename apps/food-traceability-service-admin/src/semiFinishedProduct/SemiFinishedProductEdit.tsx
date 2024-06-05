import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const SemiFinishedProductEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="batchNumber" source="batchNumber" />
        <DateTimeInput label="expiringDate" source="expiringDate" />
        <TextInput label="Ingredients" source="ingredients" />
        <TextInput label="name" source="name" />
        <DateTimeInput label="productionDate" source="productionDate" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <TextInput label="unitOfMeasure" source="unitOfMeasure" />
      </SimpleForm>
    </Edit>
  );
};
