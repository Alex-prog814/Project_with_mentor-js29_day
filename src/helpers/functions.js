export function getCountProductsInCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return cart ? cart.products.length : 0;
};

export const calcSubPrice = product => +product.count * product.item.price;

export const calcTotalPrice = products => {
    return products.reduce((pV, cur) => {
        return (pV += cur.subPrice);
    }, 0);
};

// {
//     products: [
//         {
//             item: product -> {},
//             count: 9,
//             totalSubPrice: 900
//         },
//         {
//             item: product2,
//             count: 20,
//             totalSubPrice: 1000
//         }
//     ],
//     totalPrice: 1900
// }