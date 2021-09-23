import { useMemo, useState } from 'react';

export default function usePagination(
    itemsList: unknown[] | number,
    itemsPerPage = 10
) {
    const [currentPage, setCurrentPage] = useState(1),
        totalPages = useMemo(() => {
            const totalItems =
                typeof itemsList === 'number' ? itemsList : itemsList.length;
            if (totalItems > itemsPerPage) {
                return Math.ceil(totalItems / itemsPerPage);
            }
            return 1;
        }, [itemsList, itemsPerPage]);

    return {
        currentPage,
        setCurrentPage,
        totalPages,
        itemsPerPage,
    };
}
