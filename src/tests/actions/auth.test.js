import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth";
import { types } from "../../types/types";
import '@testing-library/jest-dom';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);


describe('Pruebas en auth en actions', () => {

    beforeEach( () => {
        store = mockStore(initState);
    })

    test('login y logout deben de crear la accion respectiva', () => {
        
        const uid = 'ABC123';
        const displayName= 'Ivan';

        const loginAction = login( uid, displayName );
        const logoutAction = logout();

        expect( loginAction ).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName
            }
        });

        expect( logoutAction ).toEqual({
            type: types.logout
        });

    });


    test('debe de realizar el startLogout', async() => {
        
        await store.dispatch( startLogout() );
        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.logout
        });

        expect( actions[1] ).toEqual({
            type: types.notesLogoutCleaning
        });
    });

    test('Debe de realizar el startLoginEmailPassword', async() => {
        await store.dispatch( startLoginEmailPassword('nando@gmail.com', '123456') );

        const actions = store.getActions();

        expect( actions[1] ).toEqual({
            type: types.login,
            payload:{
                uid: 'RUQCIF19IWPh1pFl4MGW1RPhkVM2',
                displayName: 'Hernando'
            }
        });

    });
    
    
});
