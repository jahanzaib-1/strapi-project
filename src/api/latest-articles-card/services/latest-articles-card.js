'use strict';

/**
 * latest-articles-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest-articles-card.latest-articles-card');
