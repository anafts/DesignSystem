import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

//global config
export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum',
        size: 'md',
    }, argTypes: {
        size: {
            options: ['sm', 'md','lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
    
} as Meta <TextProps> 

export const Default: StoryObj <TextProps> = {}

// component variations 
export const Small: StoryObj <TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj <TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponet: StoryObj <TextProps> = {
    args: {
        asChild: true,
        children: (
            <p> Testing </p>
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