import { CSSProperties } from 'react';

export interface ProductCarProps {
    product: Product,
    children: (args: ProductCarHandlers) => JSX.Element,
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
}

export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product{
    count: number
}

export interface ProductCarHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: (value: number) => void;
    reset: () =>void;
}