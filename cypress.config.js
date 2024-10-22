const { defineConfig } = require("cypress");

module.exports = defineConfig({
    // Inicio - Configuracoes personalizadas
    urlBaseServicoCobrancaGi: 'urlBaseServicoCobrancaGi',
    urlBaseServicoNegociacao: 'urlBaseServicoNegociacao',
    urlFrontend: 'urlFrontend',
    pularConfiguracaoMfaAAD: true,
    usernameAAD: 'usename',
    passwordAAD: 'password',
    // Fim - Configuracoes personalizadas
    reporter: 'junit',
    video: false,
    screenshotOnRunFailure: false,
    watchForFileChanges: false,
    e2e: {
        baseUrl: 'baseUrl',
        experimentalSessionAndOrigin: true,
        experimentalModifyObstructiveThirdPartyCode: true,
        defaultCommandTimeout: 10000,
        viewportWidth: 1366,
        viewportHeight: 768,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
