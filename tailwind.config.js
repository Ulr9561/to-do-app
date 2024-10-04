/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            colors: {
                "bg-primary": "#2C3E50",
                "bg-secondary": "#34495E",
                "text-primary": "#ECF0F1",
                "text-secondary": "#BDC3C7",
                "accent-primary": "#BB86FC",
                "accent-secondary": "#E74C3C",
            },
            fontFamily: {
                nunito: ["Nunito Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
