import React from 'react';
import { mount } from 'enzyme';
import { Provider } from  'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { LoginScreen } from "../../../components/auth/LoginScreen";
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

jest.mock('../../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui:{
        loading: false,
        msgError: null
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={ store }>
        <MemoryRouter>
            <LoginScreen />
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en <LoginScreen /> ', () => {
    
    beforeEach( () => {
        store = mockStore(initState);
        jest.clearAllMocks();
    });

    test('Deberia de mostrar el componente correctamente ', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de disparar la accion de startGoogleLogin', () => {
       
        wrapper.find('.google-btn').prop('onClick')();

        expect( startGoogleLogin ).toHaveBeenCalled();
    });

    test('Debe de disparar la accion de startLogin con los respectivos argumentos', () => {
       
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect( startLoginEmailPassword ).toHaveBeenCalledWith('','');
    });

});
