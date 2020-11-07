module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
    ],
    rules: {
        'vue/html-self-closing': 0,
        'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }]
    }
}