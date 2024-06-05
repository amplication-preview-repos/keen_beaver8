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
import { RawMaterialController } from "../rawMaterial.controller";
import { RawMaterialService } from "../rawMaterial.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  acquiringDate: new Date(),
  batchNumber: "exampleBatchNumber",
  createdAt: new Date(),
  documentNumber: "exampleDocumentNumber",
  expiringDate: new Date(),
  id: "exampleId",
  name: "exampleName",
  quantity: 42,
  unitOfMeasure: "exampleUnitOfMeasure",
  unitPrice: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  acquiringDate: new Date(),
  batchNumber: "exampleBatchNumber",
  createdAt: new Date(),
  documentNumber: "exampleDocumentNumber",
  expiringDate: new Date(),
  id: "exampleId",
  name: "exampleName",
  quantity: 42,
  unitOfMeasure: "exampleUnitOfMeasure",
  unitPrice: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    acquiringDate: new Date(),
    batchNumber: "exampleBatchNumber",
    createdAt: new Date(),
    documentNumber: "exampleDocumentNumber",
    expiringDate: new Date(),
    id: "exampleId",
    name: "exampleName",
    quantity: 42,
    unitOfMeasure: "exampleUnitOfMeasure",
    unitPrice: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  acquiringDate: new Date(),
  batchNumber: "exampleBatchNumber",
  createdAt: new Date(),
  documentNumber: "exampleDocumentNumber",
  expiringDate: new Date(),
  id: "exampleId",
  name: "exampleName",
  quantity: 42,
  unitOfMeasure: "exampleUnitOfMeasure",
  unitPrice: 42.42,
  updatedAt: new Date(),
};

const service = {
  createRawMaterial() {
    return CREATE_RESULT;
  },
  rawMaterials: () => FIND_MANY_RESULT,
  rawMaterial: ({ where }: { where: { id: string } }) => {
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

describe("RawMaterial", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RawMaterialService,
          useValue: service,
        },
      ],
      controllers: [RawMaterialController],
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

  test("POST /rawMaterials", async () => {
    await request(app.getHttpServer())
      .post("/rawMaterials")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        acquiringDate: CREATE_RESULT.acquiringDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expiringDate: CREATE_RESULT.expiringDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /rawMaterials", async () => {
    await request(app.getHttpServer())
      .get("/rawMaterials")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          acquiringDate: FIND_MANY_RESULT[0].acquiringDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          expiringDate: FIND_MANY_RESULT[0].expiringDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /rawMaterials/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/rawMaterials"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /rawMaterials/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/rawMaterials"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        acquiringDate: FIND_ONE_RESULT.acquiringDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        expiringDate: FIND_ONE_RESULT.expiringDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /rawMaterials existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/rawMaterials")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        acquiringDate: CREATE_RESULT.acquiringDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expiringDate: CREATE_RESULT.expiringDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/rawMaterials")
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
