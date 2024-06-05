import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { SemiFinishedProductController } from "../semiFinishedProduct.controller";
import { SemiFinishedProductService } from "../semiFinishedProduct.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  batchNumber: "exampleBatchNumber",
  createdAt: new Date(),
  expiringDate: new Date(),
  id: "exampleId",
  ingredients: "exampleIngredients",
  name: "exampleName",
  productionDate: new Date(),
  quantity: 42,
  unitOfMeasure: "exampleUnitOfMeasure",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  batchNumber: "exampleBatchNumber",
  createdAt: new Date(),
  expiringDate: new Date(),
  id: "exampleId",
  ingredients: "exampleIngredients",
  name: "exampleName",
  productionDate: new Date(),
  quantity: 42,
  unitOfMeasure: "exampleUnitOfMeasure",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    batchNumber: "exampleBatchNumber",
    createdAt: new Date(),
    expiringDate: new Date(),
    id: "exampleId",
    ingredients: "exampleIngredients",
    name: "exampleName",
    productionDate: new Date(),
    quantity: 42,
    unitOfMeasure: "exampleUnitOfMeasure",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  batchNumber: "exampleBatchNumber",
  createdAt: new Date(),
  expiringDate: new Date(),
  id: "exampleId",
  ingredients: "exampleIngredients",
  name: "exampleName",
  productionDate: new Date(),
  quantity: 42,
  unitOfMeasure: "exampleUnitOfMeasure",
  updatedAt: new Date(),
};

const service = {
  createSemiFinishedProduct() {
    return CREATE_RESULT;
  },
  semiFinishedProducts: () => FIND_MANY_RESULT,
  semiFinishedProduct: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("SemiFinishedProduct", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SemiFinishedProductService,
          useValue: service,
        },
      ],
      controllers: [SemiFinishedProductController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /semiFinishedProducts", async () => {
    await request(app.getHttpServer())
      .post("/semiFinishedProducts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expiringDate: CREATE_RESULT.expiringDate.toISOString(),
        productionDate: CREATE_RESULT.productionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /semiFinishedProducts", async () => {
    await request(app.getHttpServer())
      .get("/semiFinishedProducts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          expiringDate: FIND_MANY_RESULT[0].expiringDate.toISOString(),
          productionDate: FIND_MANY_RESULT[0].productionDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /semiFinishedProducts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/semiFinishedProducts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /semiFinishedProducts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/semiFinishedProducts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        expiringDate: FIND_ONE_RESULT.expiringDate.toISOString(),
        productionDate: FIND_ONE_RESULT.productionDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /semiFinishedProducts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/semiFinishedProducts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expiringDate: CREATE_RESULT.expiringDate.toISOString(),
        productionDate: CREATE_RESULT.productionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/semiFinishedProducts")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
