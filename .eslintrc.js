module.exports = {
    root: true,
    extends: ['prettier'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
      semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
      curly: 'off',
      'no-shadow': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'eslint-comments/no-unlimited-disable': 'off',
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        rules: {
          'no-undef': 'off',
        },
      },
    ],
  }