// https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist/add
import { test, expect, request } from '@playwright/test';

const url = 'https://ecommerce-playground.lambdatest.io/index.php';

export async function addProductToWishlist(productId: string) {
    const apiContext = await request.newContext();
    const params = {
       route: 'account/wishlist/add',
    };

    let apiUrl = buildQueryParams(url, params);

  const response = await apiContext.post(apiUrl,  { data: {
    'product_id': productId
  },
     headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  expect(response.ok()).toBeTruthy();
  const responseBody = await response.json();
  console.log(responseBody);
}


async function addProductToComparePage(productId: string) {
const apiContext = await request.newContext();
    const params = {
       route: 'product/compare/add',
    };

    let apiUrl = buildQueryParams(url, params);

  const response = await apiContext.post(apiUrl,  { data: {
    'product_id': productId
  },
     headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  expect(response.ok()).toBeTruthy();
  const responseBody = await response.json();
  console.log(responseBody);
}

export async function addProductToCart(productId: string) {
const apiContext = await request.newContext();
    const params = {
       route: 'checkout/cart/add',
    };

    let apiUrl = buildQueryParams(url, params);

  const response = await apiContext.post(apiUrl,  { data: {
    'product_id': productId
  },
     headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  expect(response.ok()).toBeTruthy();
  const responseBody = await response.json();
  console.log(responseBody);
}
function buildQueryParams(url: string, searchParams: Record<string, string>): string {
  const query = new URLSearchParams(searchParams).toString();
  return `${url}?${query}`;
}
