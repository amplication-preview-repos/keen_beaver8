import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SemiFinishedProductList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SemiFinishedProducts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
