/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { rmdir } = require('fs');
const fs = require('fs');

module.exports = (on, config) => {

    on('task', {
        deleteFolderScreenshot(path) {
            if (fs.existsSync(path)) {
                
                return new Promise((resolve, reject) => {
                    rmdir(path, { maxRetries: 10, recursive: true }, (err) => {
                        if (err) {
                            console.error(err);
    
                            return reject(err);
                        }
    
                        resolve(null);
                    });
                });
            }

            return null;
        }
        
    });

    allureWriter(on, config);
    return config;
};
