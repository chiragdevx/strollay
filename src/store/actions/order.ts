import { createAction } from '@reduxjs/toolkit';

export const orderInfoActions = {
    // Below 3 will communicate with `/categories` API. 
    getOrderInfo: createAction('order/getOrderInfo'),
    setOrderInfo: createAction<{}>('order/setOrderInfo'),
    getOrderInfoError: createAction('order/getOrderInfoError'),
};