import React from 'react';
import { mount } from 'enzyme';
import { Provider } from  'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { AppRouter } from '../../routers/AppRouter';
import { login } from '../../actions/auth';
import { firebase } from '../../firebase/firebaseConfig';
import { act } from '@testing-library/react';

jest.mock('../../actions/auth', () => ({
    login: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui:{
        loading: false,
        msgError: null
    },
    notes:{
        active:{
            id: '8STIozhrNZpLNP7k7zFx',
        },
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();



describe('Pruebas en <AppRouter />', () => {

   let user;
   
    test('Debe de llamar al login si estoy autenticado ', async() => {
        //Se debe hacer con una base de datos de Testing
        await act( async () => {
            const userCred =  await firebase.auth().signInWithEmailAndPassword('nando@gmail.com', '123456');
            user = userCred.user;
    
            const wrapper = mount(
                <Provider store={ store }>
                    <MemoryRouter>
                        <AppRouter />
                    </MemoryRouter>
                </Provider>
            )
        });

        expect( login ).toHaveBeenCalledWith('RUQCIF19IWPh1pFl4MGW1RPhkVM2', 'Hernando');
    });    
    
});
