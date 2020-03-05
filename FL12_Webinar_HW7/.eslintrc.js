module.exports = {
    "extends": "eslint:recommended",
    "env": {
        "browser": true,
        "es6": true
    },
    "rules": {
        "new-cap": ["error", { "newIsCap": true }],
        "no-useless-call": "error",
        "no-self-compare": "error",
        "arrow-spacing": ["error", { "before": true, "after": true }],
        "eqeqeq": ["error", "always"],
        "no-return-assign": "error",
        "no-useless-computed-key": "error",
        "no-floating-decimal": "error",
        "quotes": ["warn", "single", { "avoidEscape": true , "allowTemplateLiterals": true }],
        "block-spacing": "error",
        "no-prototype-builtins": "off",
        "array-callback-return": "error",
        "curly": "error",
        "no-var": "warn",
        "no-new": "warn",
        "max-len": ["error", { "code": 120, "ignoreComments": true }],
        "no-unneeded-ternary": "error",
        "comma-dangle": ["error", "never"],
        "new-parens": "error",
        "no-caller": "error",
        "no-nested-ternary": "error",
        "no-console": "off",
        "no-extra-bind": "error",
        "brace-style": "error",
        "no-undef-init": "error",
        "no-lone-blocks": "error",
        "func-call-spacing": ["error", "never"],
        "no-multi-spaces": "error",
        "no-useless-constructor": "error",
        "no-extra-parens": ["error", "all"],
        "guard-for-in": "warn",
        "no-empty-function": "error",
        "default-case": "warn",
        "no-unused-vars": ["error", { "vars": "local" }],
        "no-magic-numbers": ["warn", { "ignore": [0, 1] }]
    },
    "parserOptions": {
        "sourceType": "module"
    }
}