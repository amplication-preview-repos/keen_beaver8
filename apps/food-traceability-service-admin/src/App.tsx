import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RawMaterialList } from "./rawMaterial/RawMaterialList";
import { RawMaterialCreate } from "./rawMaterial/RawMaterialCreate";
import { RawMaterialEdit } from "./rawMaterial/RawMaterialEdit";
import { RawMaterialShow } from "./rawMaterial/RawMaterialShow";
import { SemiFinishedProductList } from "./semiFinishedProduct/SemiFinishedProductList";
import { SemiFinishedProductCreate } from "./semiFinishedProduct/SemiFinishedProductCreate";
import { SemiFinishedProductEdit } from "./semiFinishedProduct/SemiFinishedProductEdit";
import { SemiFinishedProductShow } from "./semiFinishedProduct/SemiFinishedProductShow";
import { SupplierList } from "./supplier/SupplierList";
import { SupplierCreate } from "./supplier/SupplierCreate";
import { SupplierEdit } from "./supplier/SupplierEdit";
import { SupplierShow } from "./supplier/SupplierShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Food Traceability Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="RawMaterial"
          list={RawMaterialList}
          edit={RawMaterialEdit}
          create={RawMaterialCreate}
          show={RawMaterialShow}
        />
        <Resource
          name="SemiFinishedProduct"
          list={SemiFinishedProductList}
          edit={SemiFinishedProductEdit}
          create={SemiFinishedProductCreate}
          show={SemiFinishedProductShow}
        />
        <Resource
          name="Supplier"
          list={SupplierList}
          edit={SupplierEdit}
          create={SupplierCreate}
          show={SupplierShow}
        />
      </Admin>
    </div>
  );
};

export default App;
