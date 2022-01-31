module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
        project: {
            extends: './tsconfig.json',
            include: undefined,
            exclude: undefined,
        },
    },
    plugins: ['@typescript-eslint', 'prettier'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        semi: ['error', 'always'],
        'object-curly-spacing': ['error', 'always'],
        'prettier/prettier': ['error', { semi: true }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        '@typescript-eslint/interface-name-prefix': 0,
        'no-param-reassign': 0,
        'no-return-assign': 0,
        'unicorn/filename-case': 0,
        'valid-jsdoc': 0,
        'import/prefer-default-export': 0,
        'unicorn/prevent-abbreviations': 'off',
        'class-methods-use-this': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'import/no-dynamic-require': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'global-require': 'off',
        'no-await-in-loop': 'off',
        'no-restricted-syntax': 'off',
    },
};
