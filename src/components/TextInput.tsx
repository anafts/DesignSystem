import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

// The total around input
export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps){

    return (
        <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )
}


// The icon in the input
export interface TextInputIconProps {
    children: ReactNode;
}

 function TextInputIcon( props: TextInputIconProps ){
    return (
        <slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </slot>
    )
}


// The input
export interface TextInputInputProps extends InputHTMLAttributes <HTMLInputElement> {}
function TextInputInput( props : TextInputInputProps ) {

    return (
        <input className=" bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
        />  
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}