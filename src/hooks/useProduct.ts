import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);

    const isControlled = useRef(!!onChange);

    const increaseBy = (value: number): void => {

        if (isControlled.current && onChange) {
            return onChange({count: value, product})
        }
        let newVal = Math.max(counter + value, 0);
        if (initialValues?.maxCount) {
            newVal = Math.min(newVal, initialValues.maxCount);
        }
        setCounter( newVal);

        onChange && onChange({count: newVal, product});
    };

    const reset = () => {
        setCounter(initialValues?.count || value);
    };

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value)
    }, [value]);

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        increaseBy,
        reset
    };
};