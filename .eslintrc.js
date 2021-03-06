module.exports = {
    root: true,

    env: {
        node: true,
    },

    parserOptions: {
        ecmaVersion: 2020,
    },

    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
    },

    extends: ['eslint:recommended', 'plugin:vue/recommended', '@vue/prettier'],
}
