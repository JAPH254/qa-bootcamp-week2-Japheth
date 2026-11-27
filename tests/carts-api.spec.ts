
import { test, expect } from '@playwright/test';

const baseURL = 'https://api.practicesoftwaretesting.com';

let cartId: string | undefined;

test.afterEach(async ({ request }) => {
    if (cartId) {
        const idToDelete = cartId;
        cartId = undefined;

        const deleteResponse = await request.delete(
            `${baseURL}/carts/${idToDelete}`
        );

        expect(deleteResponse.status()).toBe(204);
    }
});

test('create a cart and add a product successfully', async ({ request }) => {

    const productsResponse = await request.get(
        `${baseURL}/products?page=1`
    );

    expect(productsResponse.status()).toBe(200);

    const productsBody = await productsResponse.json();
    const productId = productsBody.data[0].id;

    expect(productId).toBeTruthy();

    const createCartResponse = await request.post(
        `${baseURL}/carts`
    );

    expect(createCartResponse.status()).toBe(201);

    const cartBody = await createCartResponse.json();

    expect(cartBody.id).toBeTruthy();

    cartId = cartBody.id;

    const addProductResponse = await request.post(
        `${baseURL}/carts/${cartId}`,
        {
            data: {
                product_id: productId,
                quantity: '3'
            }
        }
    );

    expect(addProductResponse.status()).toBe(200);

    const addProductBody = await addProductResponse.json();

    expect(addProductBody.result).toBe('item added or updated');
});

test('requesting a nonexistent cart returns 404', async ({ request }) => {
    const unknownCartId = 'non-existent-cart-id-123456789';

    const response = await request.get(
        `${baseURL}/carts/${unknownCartId}`
    );

    expect(response.status()).toBe(404);
});
