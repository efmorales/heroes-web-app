import { authReducer } from '../../../src/auth/context';
import { waitFor } from '@testing-library/react';

describe('Pruebas en authReducer', () => {

    test('debe de retornar el estado por defecto', () => {
        
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('debe de autenticar y colocar el name del usuario', () => {
        
        const action = {
            type: 'login',
            payload: {
                name: 'Enzo'
            }
        };

        const state = authReducer({ logged: false }, action);

        waitFor(() => {
            expect(state).toEqual({ logged: true, name: 'Enzo' });
        });

    });

    test('debe de borrar el name del usuario y logged en false', () => {
        const action = {
            type: 'logout'
        };

        const state = authReducer({ logged: true, name: 'Pedro' }, action);
        waitFor(() => {
            expect(state).toEqual({ logged: false });
        });
    });
}

);
