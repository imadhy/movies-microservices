import { Test, TestingModule } from '@nestjs/testing';
import { MovieService } from './movie.service';

describe('MovieService', () => {
    let movie: MovieService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MovieService],
        }).compile();

        movie = module.get<MovieService>(MovieService);
    });

    it('should be defined', () => {
        expect(movie).toBeDefined();
    });
});
