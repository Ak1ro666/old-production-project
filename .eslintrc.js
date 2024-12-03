module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next'],
    rules: {
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'react/function-component-definition': 'off',
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'linebreak-style': 'off',
        'no-param-reassign': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-shadow': 'off',
        'implicit-arrow-linebreak': 'off',
        'no-unused-vars': 'off',
        'object-curly-newline': 'off',
        'function-paren-newline': 'off',
        'react/require-default-props': 'off',
        'import/order': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': [
            'error',
            { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
        ],
        'max-len': ['error', { ignoreComments: true, code: 100 }],
        'arrow-body-style': 'off',
        'react/jsx-wrap-multilines': 'off',
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
    globals: {
        __IS_DEV__: true,
    },
};
