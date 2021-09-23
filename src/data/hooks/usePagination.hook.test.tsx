import { renderHook, act } from '@testing-library/react-hooks';
import usePagination from './usePagination.hook';

test('should calculate number of pages by list length', () => {
    const { result } = renderHook(() => usePagination([1, 2, 3], 2));
    expect(result.current.totalPages).toBe(2);
});

test('should calculate number of pages by list size', () => {
    const { result } = renderHook(() => usePagination(3, 2));
    expect(result.current.totalPages).toBe(2);
});

test('should jump to the next pages', () => {
    const { result } = renderHook(() => usePagination([1, 2, 3], 2));
    expect(result.current.totalPages).toBe(2);
    expect(result.current.currentPage).toBe(1);

    act(() => result.current.setCurrentPage(2));

    expect(result.current.currentPage).toBe(2);
});
