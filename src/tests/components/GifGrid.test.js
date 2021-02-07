import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { shallow } from 'enzyme'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('tests sobre gifgrid', () => {

    test('debe crearse el componente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category='slayer' />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar items cuando se llama el hook', () => {
        const imgs = [{
            id: 123,
            title: 'aly',
            url: 'https://mock/jj.png'
        },
        {
            id: 125,
            title: 'alya',
            url: 'https://mock/jl.png'
        }]
        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category='slayer' />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(imgs.length);
    })

})
