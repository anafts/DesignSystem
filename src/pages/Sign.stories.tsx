import { Meta, StoryObj } from '@storybook/react'
import { SignIn } from '../pages/SignIn'
import { expect } from '@storybook/jest'
import { within, userEvent, waitFor } from '@storybook/testing-library'

//global config
export default {
    title: 'Pages/Sign In',
    component: SignIn,
    args: {},
    argTypes: {}
} as Meta 

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Digite o seu e-mail'), 'ana.freitaas16@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('********'), '12345678')

        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => {
            return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
        })
    }
}