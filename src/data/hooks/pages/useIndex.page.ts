import useDebounce from '@hooks/useDebounce.hook';
import usePagination from '@hooks/usePagination.hook';
import { JokeService } from '@services/JokeService';
import { JokeInterface } from 'data/@types/JokeInterface';
import { useEffect, useState } from 'react';

export default function useIndex() {
    const jokesPerPage = 10,
        [isLoading, setIsLoading] = useState(false),
        [searchTerm, setSearchTerm] = useState(''),
        debouncedSearchTerm = useDebounce(searchTerm, 1500),
        [totalJokes, setTotalJokes] = useState(0),
        [jokesList, setJokesList] = useState<JokeInterface[]>([]),
        { currentPage, setCurrentPage, totalPages, itemsPerPage } =
            usePagination(totalJokes, jokesPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearchTerm]);

    useEffect(() => {
        setIsLoading(true);
        JokeService.search(searchTerm, jokesPerPage, currentPage)
            .then((jokeResponse) => {
                setJokesList(jokeResponse.results);
                setTotalJokes(jokeResponse.total_jokes);
            })
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 300);
            });
    }, [debouncedSearchTerm, currentPage]);

    return {
        isLoading,
        debouncedSearchTerm,
        searchTerm,
        setSearchTerm,
        jokesList,
        currentPage,
        setCurrentPage,
        totalPages,
        itemsPerPage,
    };
}
