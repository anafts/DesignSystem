import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface ButtonProps {
    children: ReactNode; 
    asChild?: boolean;
}

export function Button({  children, asChild }: ButtonProps ) {

    const Comp = asChild ? Slot : 'button';
    return (
        <Comp className={clsx (
            'py-4 px-12 bg-cyan-500 rounded font-semibold',
            {
                
            }
        )} > 
        {children} 
        </Comp>
    )
}