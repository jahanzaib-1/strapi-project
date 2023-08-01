'use strict';

/**
 * score-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::score-card.score-card');
