import React from 'react';
import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';

import { ProductCarProps, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: ProductCarProps) => {

    const {counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({onChange, product, value, initialValues});
    
    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        product,
                        increaseBy,
                        reset
                    }) 
                }
            </div>
        </Provider>
    );
};