/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { RawMaterialCreateNestedManyWithoutSuppliersInput } from "./RawMaterialCreateNestedManyWithoutSuppliersInput";
import { Type } from "class-transformer";

@InputType()
class SupplierCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  contact?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => RawMaterialCreateNestedManyWithoutSuppliersInput,
  })
  @ValidateNested()
  @Type(() => RawMaterialCreateNestedManyWithoutSuppliersInput)
  @IsOptional()
  @Field(() => RawMaterialCreateNestedManyWithoutSuppliersInput, {
    nullable: true,
  })
  rawMaterials?: RawMaterialCreateNestedManyWithoutSuppliersInput;
}

export { SupplierCreateInput as SupplierCreateInput };