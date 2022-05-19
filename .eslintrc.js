module.exports = {
    "env": {
        es6:     true, // 启用 ES6 语法支持以及新的 ES6 全局变量或类型
        node:    true, // Node.js 全局变量和 Node.js 作用域
        browser: true, // 浏览器全局变量
        jquery:  true, // jQuery 全局变量
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType":  "module",
    },
    "extends": ["eslint:recommended",'plugin:vue/vue3-recommended'],
    "rules":   {
        "key-spacing":     ["error", { align: "value", }],
        "no-multi-spaces": ["error", { ignoreEOLComments: true, }],
        "indent":          [2, 4], 
        "comma-dangle":    ["error", {
            "arrays":    "never",
            "objects":   "always",
            "imports":   "never",
            "exports":   "never",
            "functions": "never",
        }],
    },
}