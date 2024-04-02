import { types } from "../../../src/auth/types/types"

describe('Pruebas en "Types.js"', () => {
    test('should return types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
    })
})