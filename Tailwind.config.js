module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/flowbite-react/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                customOrange: {
                    light: '#ffcc80',
                    DEFAULT: '#ff9800',
                    dark: '#e65100',
                },
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}