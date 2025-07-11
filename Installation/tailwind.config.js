/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/*.{html,js}"],
    theme: {
        extend: {
            container: {
                center: true,
            },
            colors: {
                clifford: "#da373d",
            },
        },
    },
    plugins: [],
};
