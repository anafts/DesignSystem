import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

//global config
export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account',
    },
    argTypes: {
        
    }
} as Meta <ButtonProps> 

export const Default: StoryObj <ButtonProps> = {}

// component variations 
export const Small: StoryObj <ButtonProps> = {
    args: {
        
    }
}

export const Large: StoryObj <ButtonProps> = {
    args: {
        
    }
}

export const CustomComponet: StoryObj <ButtonProps> = {
    args: {
        asChild: true,
        children: (
            <h1> Button with H1 </h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
        
    }
}