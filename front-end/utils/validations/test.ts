import {
  forgotValidate,
  personalDataValidate,
  resetValidate,
  scholarityDataValidate,
  signInValidate,
  signUpValidate
} from '.'

describe('validation', () => {
  describe('signInValidate()', () => {
    it('should validate empty fields', () => {
      const values = { userName: '', password: '' }

      expect(signInValidate(values)).toMatchObject({
        userName: 'Usuário é um campo obrigatório.',
        password: 'Senha é um campo obrigatório.'
      })
    })

    it('should return invalid username error', () => {
      const values = { userName: 'an', password: '123' }

      expect(signInValidate(values).userName).toMatchInlineSnapshot(
        `"Usuário deve conter no mínimo 3 caracteres."`
      )
    })
  })

  describe('signUpValidate()', () => {
    it('should validate empty fields', () => {
      const values = {
        userName: '',
        email: '',
        password: '',
        confirm_password: ''
      }

      expect(signUpValidate(values)).toMatchObject({
        email: expect.any(String),
        userName: expect.any(String),
        password: expect.any(String)
      })
    })

    it('should return short username error', () => {
      const values = {
        userName: 'tor',
        email: '',
        password: '',
        confirm_password: ''
      }

      expect(signUpValidate(values).username).toMatchInlineSnapshot(`undefined`)
    })

    it('should return short password error', () => {
      const values = {
        userName: '',
        email: '',
        password: '123',
        confirm_password: '321'
      }

      expect(signUpValidate(values).password).toMatchInlineSnapshot(
        `"Senha deve conter no mínimo 8 caracteres."`
      )
    })

    it('should return error if passwords doesnt match', () => {
      const values = {
        userName: '',
        email: '',
        password: '123',
        confirm_password: '321'
      }

      expect(signUpValidate(values).confirm_password).toMatchInlineSnapshot(
        `"A confirmação de senha não bate com a senha informada"`
      )
    })
  })

  describe('forgotValidate()', () => {
    it('should validate empty fields', () => {
      const values = { userName: '' }

      expect(forgotValidate(values)).toMatchObject({
        userName: 'Usuário é um campo obrigatório.'
      })
    })

    it('should return invalid username error', () => {
      const values = { userName: 'in' }

      expect(forgotValidate(values).userName).toMatchInlineSnapshot(
        `"Usuário deve conter no mínimo 3 caracteres."`
      )
    })
  })

  describe('resetValidate()', () => {
    it('should validate empty password', () => {
      const values = { password: '', confirm_password: '' }
      expect(resetValidate(values)).toMatchObject({
        password: expect.any(String)
      })
    })

    it('should validate empty confirm password', () => {
      const values = { password: '321', confirm_password: '' }
      expect(resetValidate(values).confirm_password).toMatchInlineSnapshot(
        `"\\"confirm_password\\" is not allowed to be empty"`
      )
    })

    it('should return short password error', () => {
      const values = {
        password: '123',
        confirm_password: '321'
      }

      expect(resetValidate(values).password).toMatchInlineSnapshot(
        `"Senha deve conter no mínimo 8 caracteres."`
      )
    })

    it('should return error if passwords doesnt match', () => {
      const values = {
        password: '123',
        confirm_password: '321'
      }

      expect(resetValidate(values).confirm_password).toMatchInlineSnapshot(
        `"A confirmação de senha não bate com a senha informada"`
      )
    })
  })

  describe('personalDataValidate()', () => {
    it('should validate empty fields', () => {
      const values = {
        name: '',
        lastName: '',
        cpf: '',
        phoneNumber: ''
      }

      expect(personalDataValidate(values)).toMatchObject({
        name: expect.any(String),
        lastName: expect.any(String),
        cpf: expect.any(String),
        phoneNumber: expect.any(String)
      })
    })
  })

  describe('scholarityDataValidate()', () => {
    it('should validate empty fields', () => {
      const values = {
        scholarity: '',
        institution: ''
      }

      expect(scholarityDataValidate(values)).toMatchObject({
        scholarity: expect.any(String),
        institution: expect.any(String)
      })
    })
  })
})
