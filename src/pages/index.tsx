import type { NextPage } from 'next';
import {
    CircularProgress,
    ListItem,
    TextField,
    Typography,
} from '@mui/material';
import useIndex from '@hooks/pages/useIndex.page';
import Pagination from '@components/navigation/Pagination/Pagination';
import { ContentContainer, JokeList } from '@styles/page/index.style';
import { useEffect } from 'react';
import { BrowserService } from '@services/BrowserService';

const Home: NextPage = () => {
    const {
        isLoading,
        searchTerm,
        setSearchTerm,
        jokesList,
        currentPage,
        setCurrentPage,
        totalPages,
    } = useIndex();

    useEffect(() => {
        BrowserService.scrollToTop();
    }, [currentPage]);

    return (
        <ContentContainer>
            <TextField
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                label={'Search . . .'}
                InputProps={{
                    endAdornment: (
                        <i
                            className={`fas fa-${
                                isLoading ? 'circle-notch fa-spin' : 'search'
                            }`}
                        />
                    ),
                }}
                fullWidth
                sx={{ mb: 4 }}
            />

            {jokesList.length > 0 && (
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onPageChange={setCurrentPage}
                />
            )}

            {isLoading ? (
                <CircularProgress sx={{ my: 10 }} color={'secondary'} />
            ) : jokesList.length ? (
                <JokeList>
                    {jokesList.map((item) => (
                        <ListItem key={item.id}>
                            <Typography color={'secondaryText'}>
                                {item.joke}
                            </Typography>
                        </ListItem>
                    ))}
                </JokeList>
            ) : (
                <Typography sx={{ mt: 10 }}>
                    No jokes found for <strong>{searchTerm}</strong>
                </Typography>
            )}

            {jokesList.length > 0 && (
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onPageChange={setCurrentPage}
                />
            )}
        </ContentContainer>
    );
};

export default Home;
