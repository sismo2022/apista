'use strict';

/**
 * invoce service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::invoce.invoce');
