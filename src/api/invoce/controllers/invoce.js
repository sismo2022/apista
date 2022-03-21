'use strict';

/**
 *  invoce controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::invoce.invoce');
