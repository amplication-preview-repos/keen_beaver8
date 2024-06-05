import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";

export const RawMaterialList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RawMaterials"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="acquiringDate" source="acquiringDate" />
        <TextField label="batchNumber" source="batchNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="documentNumber" source="documentNumber" />
        <TextField label="expiringDate" source="expiringDate" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="quantity" source="quantity" />
        <ReferenceField
          label="Supplier"
          source="supplier.id"
          reference="Supplier"
        >
          <TextField source={SUPPLIER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="unitOfMeasure" source="unitOfMeasure" />
        <TextField label="unitPrice" source="unitPrice" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
