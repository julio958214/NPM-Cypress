/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { rmdir } = require('fs');

module.exports = (on, config) => {
    allureWriter(on, config);

    on('task', {
        deleteFolder(screenshots) {
            console.log('deleting folder %s', screenshots);

            return new Promise((resolve, reject) => {
                rmdir('cypress/screenshots', { maxRetries: 10, recursive: true }, (err) => {
                    if (err) {
                        console.error(err);

                        return reject(err);
                    }

                    resolve(null);
                });
            });
        },
    });
    return config;
};
