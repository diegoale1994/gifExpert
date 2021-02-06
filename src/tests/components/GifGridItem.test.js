const { shallow } = require("enzyme")
const { GifGridItem } = require("../../components/GifGridItem")

describe('pruebas a GridItem', () => {

    const title = 'Gif Example';
    const url = 'https:/localhost:8080/test.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('should mostrar el componente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el titulo ', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('debe de tener la imagen = al prop y alt del titulo', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('que el div tenga la clase css', () => {
        const div = wrapper.find('div');
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true)
    })

})
