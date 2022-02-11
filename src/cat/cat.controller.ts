import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('cat')
export class CatController {
  @Get()
  findAll(@Query() query): string {
    return `This action returns all cats. ${JSON.stringify({ ...query })}`;
  }

  @Get('/my')
  findMy(): string {
    return 'This action returns my cats.';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns one cat. id: ${id}`;
  }
}
