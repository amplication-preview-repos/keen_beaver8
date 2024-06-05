import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RawMaterialTitle } from "../rawMaterial/RawMaterialTitle";

export const SupplierEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
