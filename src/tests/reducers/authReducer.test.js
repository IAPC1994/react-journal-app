import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";


describe('Pruebas sobre authReducer', () => {
   
    test('Debe de realizar el login ', () => {
        const initState = {};
        const action = {
            type:types.login,
            payload: {
                uid: 'abc',
                displayName: 'Ivan'
            }
        };

        const state = authReducer( initState, action );

        expect( state ).toEqual({
            uid: 'abc',
            name: 'Ivan'
        });
    });

    test('Debe de realizar el logout ', () => {
        const initState = {
            uid: 'def',
            name: 'Ivan'
        };
        const action = {
            type:types.logout
        };

        const state = authReducer( initState, action );

        expect( state ).toEqual({});
    });

    test('No debe de hacer cambios en el state', () => {
        const initState = {
            uid: 'def',
            name: 'Ivan'
        };
        const action = {
            type: 'asdasdasd'
        };

        const state = authReducer( initState, action );

        expect( state ).toEqual( initState );
    });
    
});
