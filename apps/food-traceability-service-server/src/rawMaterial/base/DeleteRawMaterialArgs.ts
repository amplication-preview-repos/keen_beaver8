/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RawMaterialWhereUniqueInput } from "./RawMaterialWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteRawMaterialArgs {
  @ApiProperty({
    required: true,
    type: () => RawMaterialWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RawMaterialWhereUniqueInput)
  @Field(() => RawMaterialWhereUniqueInput, { nullable: false })
  where!: RawMaterialWhereUniqueInput;
}

export { DeleteRawMaterialArgs as DeleteRawMaterialArgs };