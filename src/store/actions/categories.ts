import { createAction } from '@reduxjs/toolkit';

export const categoryActions = {
    // Below 3 will communicate with `/categories` API. 
    getCategories: createAction('categories/getCategories'),
    setCategories: createAction('categories/setCategories'),
    getCategoriesError: createAction('categories/getCategoriesError'),
};