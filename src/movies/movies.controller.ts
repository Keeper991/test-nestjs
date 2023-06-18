import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'Get all movies.';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `Search movie with year. year: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `Get movie. id: ${movieId}`;
  }

  @Post()
  create() {
    return `Create movie.`;
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `Remove movie. id: ${movieId}`;
  }

  @Put(':id')
  update(@Param('id') movieId: string) {
    return `Update movie. id: ${movieId}`;
  }

  @Patch(':id')
  patch(@Param('id') movieId: string) {
    return `Path movie. id: ${movieId}`;
  }
}
