import { IsArray, IsBoolean, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class createProductDto {
    @IsString()
    title!: string;

    @IsString()
    description!: string;

    @IsNumber()
    @Min(0)
    price!: number;
  
    @IsNumber()
    @Min(0)
    stock!: number;
  
    @IsNumber()
    @IsOptional()
    @Min(0)
    discount!: number;
  
    @IsString()
    category!: string;
  
    @IsArray()
    @IsOptional()
    images!: string[];
  
    @IsBoolean()
    @IsOptional()
    featured!: boolean;
}