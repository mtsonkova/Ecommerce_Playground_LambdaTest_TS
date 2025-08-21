import {Page} from '@playwright/test';

export const HomePageLocators = (page:Page) => {
    const searchResults = 'ul.dropdown-menu.autocomplete';
    const productsActions = 'div.product-action';
    const menuItems = 'ul.navbar-nav.horizontal';
    const pricesTalbe = 'table.table.mb-0';
    const myAccountDropdown = 'ul.mz-sub-menu-96.dropdown-menu'

    return {
    mainHeader: {
        searchSection: {
            allCategories: page.locator('.dropdown.search-category button'),
            searchField: page.locator('input[name="search"]'),
            searchBtn: page.getByRole('button', {name: 'Search'}),
        },
        resultItems: page.locator(`${searchResults} li`),
        compareIcon: page.locator('span[data-original-title= "Compare"]'),
        favoritesIcon: page.locator('span[data-original-title="Wishlist"]'),
        shoppingCartIcon: page.locator('div.cart-icon:nth-of-type(1) div.icon.svg-icon'),
        shoppingCartBadge: page.locator('div.cart-icon:nth-of-type(1) span:nth-of-type(1)'),
        miniCartDrawer: page.locator('div#cart-total-drawer'),
        miniCartSection: {
            emptyMiniCart: {
            subTotal: page.locator('tr:nth-of-type(1) td:nth-of-type(2)'),
            total: page.locator('tr:nth-of-type(2) td:nth-of-type(2)'),
            },
            productsMiniCart: {
                productsTable: page.locator('div.table-responsive > table.table'),
                pricesTable: page.locator('table.table.mb-0'),
                subTotal: page.locator(`${pricesTalbe} tr:nth-of-type(1) td:nth-of-type(2)`),
                ecoTax: page.locator(`${pricesTalbe} tr:nth-of-type(2) td:nth-of-type(2)`),
                vat: page.locator(`${pricesTalbe} tr:nth-of-type(3) td:nth-of-type(2)`),
                total: page.locator(`${pricesTalbe} tr:nth-of-type(4) td:nth-of-type(2)`),

            },
            editCart: page.locator('#entry_217850 a'),
            checkoutBtn: page.locator('#entry_217851 a'),
        },
    },

    mainMenu: {
        shopByCategory: page.getByText('Shop by Category'),
        home: page.getByText(' Home'),
        special: page.getByText(' Special'),
        blog: page.getByText(' Blog'),
        megaMenu: page.getByText(' Mega Menu'),
        addOns: page.getByText(' AddOns'),
        myAccount: page.getByText(' My account'),
        myAcocuntMenu: {
            guestUser: {
                logIn: page.locator(`${myAccountDropdown} li:nth-of-type(1) a`),
                register: page.locator(`${myAccountDropdown} li:nth-of-type(2) a`),
            },
            loggedUser: {
                dashboard: page.locator(`${myAccountDropdown} li:nth-of-type(1) a`),
                myOrder: page.locator(`${myAccountDropdown} li:nth-of-type(2) a`),
                return: page.locator(`${myAccountDropdown} li:nth-of-type(3) a`),
                tracking: page.locator(`${myAccountDropdown} li:nth-of-type(4) a`),
                myVouchers: page.locator(`${myAccountDropdown} li:nth-of-type(5) a`),
                logout: page.locator(`${myAccountDropdown} li:nth-of-type(6) a`),
            }
        }
    },

    notificationBox: {
        header: {
            headerText: page.locator('div.toast-header span'),
            closeBtn: page.locator('div.toast-header button span'),
        },
        body: {
            bodyText: page.locator('div.toast-body p'),
            viewCartBtn: page.locator('div.form-row a.btn-primary'),
            checkoutBtn: page.locator('div.form-row a.btn-secondary'),
        },
    },

    productsSection: {
        productsItems: page.locator('div.carousel-item'),
        productsActions: {
            addToCartBtn: page.locator(`${productsActions} button.btn.btn-cart`),
            addToWishlistbtn: page.locator(`${productsActions} button.btn.btn-wishlist`),
            quickViewBtn: page.locator(`${productsActions} button.btn.btn-quick-view`),
            compareBtn: page.locator(`${productsActions} button.btn.btn-compare`),
        }       
    }
};
};