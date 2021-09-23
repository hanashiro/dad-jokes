export interface JokeInterface {
    id: string;
    joke: string;
    status?: number;
}

export interface JokeSearchResultInterface {
    current_page: number;
    limit: number;
    next_page: number;
    previous_page: number;
    results: JokeInterface[];
    search_term: string;
    status: number;
    total_jokes: number;
    total_pages: number;
}
