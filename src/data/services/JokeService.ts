import { ApiService } from './ApiService';
import {
    JokeInterface,
    JokeSearchResultInterface,
} from 'data/@types/JokeInterface';

export const JokeService = {
    async get(): Promise<JokeInterface> {
        return (await ApiService.get('/')).data;
    },
    async search(
        term: string = '',
        limit = 10,
        page = 1
    ): Promise<JokeSearchResultInterface> {
        return (
            await ApiService.get('/search', {
                params: {
                    term,
                    limit,
                    page,
                },
            })
        ).data;
    },
};
