'use strict';

/**
 * strapitodo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strapitodo.strapitodo');
