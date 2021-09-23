import { renderHook, act } from '@testing-library/react-hooks';
import useDebounce from './useDebounce.hook';

test('should wait for value update (debounced value)', async () => {
    await act(async () => {
        const debounceTime = 20,
            { result, rerender } = renderHook(
                ({ initialValue }) => useDebounce(initialValue, debounceTime),
                { initialProps: { initialValue: 1 } }
            );

        expect(result.current).toBe(1);

        rerender({ initialValue: 2 });

        await new Promise((r) => setTimeout(r, debounceTime + 10));

        expect(result.current).toBe(2);
    });
});
