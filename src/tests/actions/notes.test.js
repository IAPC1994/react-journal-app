import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
//import { startLoadingNotes, startNewNote } from '../../actions/notes';
import { fileUpload } from '../../helpers/fileUpload';

jest.mock('../../helpers/fileUpload', () => ({
    fileUpload: jest.fn( () => {
        return 'https://hola-mundo.com/cosa.jpg';
        // return Promise.resolve('https://hola-mundo.com/cosa.jpg');
    })
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: 'TESTING'
    }, 
    notes: {
        active:{
            id: '123232323213123',
            title: 'Hola',
            body: ' mundo'
        }
    }
}

let store = mockStore(initState);
 

describe('Pruebas en notes en actions', () => {

    beforeEach( () => {
        store = mockStore(initState);
    })
   
    test('Debe de crear una nueva nota startNewNote ', async() => {
        /*
        Probar cuando se tiene una base de datos para Testing
        await store.dispatch( startNewNote() );
        
        const actions = store.getActions();
        
        expect( actions[0] ).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        expect( actions[1] ).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        const docId = actions[0].payload.id;
        await db.doc(`/TESTING/journal/notes/${ docId }`).delete();

        */
    });

    test('startLoadingNotes debe cargar las notas', async() => {
        /*await store.dispatch( startLoadingNotes('TESTING') );
        const actions = store.getActions();
        expect( actions ).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number),
        }

        expect( actions[0].payload[0] ).toMatchObject(expected);

        */
    });

    test('startSaveNote debe de guardar la nota', async() => {

        /*
        const note = {
            id: '230912039210',
            title: 'titulo',
            body: 'body'
        };

        await store.dispatch( startSaveNote( note ));

        const actions = store.getActions();

        expect( actions[0].type ).toBe( types.notesUpdated );

        const docRef = await db.doc(`/TESTING/journal/notes/${ note.id }`).get();

        expect( docRef.data().title ).toBe( note.title );
        */
    });
    
    test('startUpLoading debe de actualizar el URL del entry', async() => {
        /*
        const file = new File([], 'foto.jpg');
        await store.dispatch( startUploading( file ) );

        const docRef = await db.doc(`/TESTING/journal/notes/aasdsadasdsdsad`).get();

        expect( docRef.data().url ).toBe('https://hola-mundo.com/cosa.jpg');

        */
    });
    
});
