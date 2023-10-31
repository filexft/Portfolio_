/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                sm: { max: "500px" },
                md: { min: "640px" },
            },
            fontWeight: {
                600: 600,
            },
            colors: {
                "bcg-black-900": "var(--bg-black-900)",
                "bcg-black-100": "var(--bg-black-100)",
                "bcg-black-50": "var(--bg-black-50)",
                'text-black-900': "var(--text-black-900)",
                'text-black-700': "var(--text-black-700)",
                'skin-color' : 'var(--skin-color)'
            },
        },
        fontFamily: {
            poppins: ["Poppins", "sans"],
            clicker: ["Clicker Script", "cursive"],
            arizonia: ["Arizonia", "cursive"],
            rouge: ["Rouge Script", "cursive"],
        },
    },
    plugins: [],
};
