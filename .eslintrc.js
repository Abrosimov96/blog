module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        "plugin:i18next/recommended"
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        "@typescript-eslint",
        "i18next"
    ],
    rules: {
        '@typescript-eslint/indent': ['error', 4],
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/naming-convention': 'warn',
        'react/no-deprecated': 'warn',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn',
        "i18next/no-literal-string": ['error', {markupOnly: true}]
    },
    globals: {
        __IS_DEV__: true
    }
}
