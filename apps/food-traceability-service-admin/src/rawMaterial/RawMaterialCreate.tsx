import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SupplierTitle } from "../supplier/SupplierTitle";

export const RawMaterialCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="acquiringDate" source="acquiringDate" />
        <TextInput label="batchNumber" source="batchNumber" />
        <TextInput label="documentNumber" source="documentNumber" />
        <DateTimeInput label="expiringDate" source="expiringDate" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <ReferenceInput
          source="supplier.id"
          reference="Supplier"
          label="Supplier"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
        <TextInput label="unitOfMeasure" source="unitOfMeasure" />
        <NumberInput label="unitPrice" source="unitPrice" />
      </SimpleForm>
    </Create>
  );
};
