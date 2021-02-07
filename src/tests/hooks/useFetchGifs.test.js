import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'
describe('test sobre el hook', () => {
    test('debe retornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('dragon ball'));
        const { data: images, loading } = result.current;
        await waitForNextUpdate();
        expect(images).toEqual([]);
        expect(loading).toBe(true);
    })

    test('debe retornar un arreglo de imgs y loading false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('dragon ball'));
        await waitForNextUpdate();
        const { data: images, loading } = result.current;
        expect(images.length).toBe(5);
        expect(loading).toBe(false);
    })

})
