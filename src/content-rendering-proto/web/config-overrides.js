var path = require('path');
var TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = function override(config, env) {
    var compilerIndex = 2;
    var compilerRules = config.module.rules[compilerIndex];

    var tsRuleIndex = 1;
    var tsRule = compilerRules.oneOf[tsRuleIndex];

    delete tsRule.include;
    config.module.rules.splice(compilerIndex, 1, compilerRules);

    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(
        new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, 'tsconfig.json') })
    );

    return config;
}