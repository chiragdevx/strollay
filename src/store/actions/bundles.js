import { createAction } from '@reduxjs/toolkit';

export const bundleActions = {
    // Below 3 will communicate with `/categories` API. 
    getBundles: createAction('bundles/getBundles'),
    setBundles: createAction('bundles/setBundles'),
    getBundlesError: createAction('bundles/getBundlesError'),
};