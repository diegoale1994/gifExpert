import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory';
import React from 'react';

describe('Pruebas en el componente addcategory', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe cambiar la caja de texto ', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value } });
        console.log(wrapper.find('p').text().trim());
        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('no debe postear la informacion onsubmit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('debe llamar setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'megadeth';
        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).toHaveBeenCalled();
        expect(input.text()).toBe('');
    })
    

})
