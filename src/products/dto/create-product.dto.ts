import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsOptional()
  description?: string;

  @IsIn(['men', 'women', 'kid', 'unisex'])
  gender: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @IsString({ each: true })
  @IsArray()
  sizes: string[];

  @IsString()
  @IsOptional()
  slug?: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags: string[];

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  images?: string[];

  @IsString()
  @MinLength(1)
  title: string;
}
