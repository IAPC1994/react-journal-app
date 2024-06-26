import React from 'react';
import { mount } from 'enzyme';
import { Provider } from  'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { activeNote } from '../../../actions/notes';
import { NoteScreen } from '../../../components/notes/NoteScreen';


jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: '2uxVLjJxcsSBlWLfFoIv8KsViMJ3',
        name: 'Ivan Panussis C',

    },
    ui:{
        loading: false,
        msgError: null
    },
    notes:{
        active: {
            id: '8STIozhrNZpLNP7k7zFx',
            title: 'Hola mundo...',
            date: 1629621502615,
            body: 'Hoy fue un buen dia... jajaja'
        },
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={ store }>
        <NoteScreen />
    </Provider>
)

describe('Pruebas en <NoteScreen />', () => {
   
    test('Debe de mostrarse correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    

    test('Debe de disparar el activeNote ', () => {
        
        wrapper.find('input[name="title"]').simulate('change',{
            target: {
                name: 'title',
                value: 'Hola de nuevo'
            }
        });


        expect( activeNote ).toHaveBeenLastCalledWith(
            '8STIozhrNZpLNP7k7zFx',
            {
                id: '8STIozhrNZpLNP7k7zFx',
                title: 'Hola de nuevo',
                date: 1629621502615,
                body: 'Hoy fue un buen dia... jajaja'
            }
        );

    });
    

});
