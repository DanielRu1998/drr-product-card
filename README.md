# Drr-product-Card

Este es un paquete de pruebas de despliegue en NPM

### DANIEL RUBIO

## Ejemplo
```
import {ProductCard, ProductImage, ProductTitle, ProductButtons } from 'drr-product-card';
```
```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
>
    {
        ({reset, count, increaseBy}) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
                <button onClick={reset}>Reset</button>
                <button onClick={() => increaseBy(-2)}>-2</button>
                <button onClick={() => increaseBy(2)}>+2</button>
                <span>{count}</span>
            </>
        )
    }
</ProductCard>
```