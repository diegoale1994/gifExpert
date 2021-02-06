import { getGifs } from "../../helpers/getGifs";

describe('pruebas con getGifs', () => {
    test('debe retornar 5 elementos', async () => {
        const gifs = await getGifs('metallica');
        expect(gifs.length).toBe(5);
    })

    test('debe retornar 5 elementos', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
})
