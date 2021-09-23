import React, { useMemo } from 'react';
import {
    Button,
    Pagination as MuiPagination,
    PaginationProps as MuiPaginationProps,
} from '@mui/material';
import { PaginationContainer } from './Pagination.style';

export interface PaginationProps extends MuiPaginationProps {
    onPageChange?: (nextPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ onPageChange, ...props }) => {
    const hasPreviousButton = useMemo(() => props.page !== 1, [props.page]),
        hasNextButton = useMemo(
            () => (props.page || 1) < (props.count || 1),
            [props.count, props.page]
        );

    function handlePageChange(nextPage: number) {
        onPageChange && onPageChange(nextPage);
    }

    return (
        <PaginationContainer>
            <Button
                color={'secondary'}
                disabled={!hasPreviousButton}
                onClick={() => handlePageChange((props.page || 0) - 1)}
            >
                Previous
            </Button>
            <MuiPagination
                color={'secondary'}
                showFirstButton
                showLastButton
                hidePrevButton
                hideNextButton
                onChange={(_event, nextPage) => handlePageChange(nextPage)}
                {...props}
            />
            <Button
                color={'secondary'}
                disabled={!hasNextButton}
                onClick={() => handlePageChange((props.page || 0) + 1)}
            >
                Next
            </Button>
        </PaginationContainer>
    );
};

export default Pagination;
