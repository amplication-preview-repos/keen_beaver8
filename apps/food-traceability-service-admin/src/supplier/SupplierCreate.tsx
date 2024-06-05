import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RawMaterialTitle } from "../rawMaterial/RawMaterialTitle";

export const SupplierCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="contact" source="contact" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="rawMaterials"
          reference="RawMaterial"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RawMaterialTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
