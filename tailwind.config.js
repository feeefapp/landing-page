/** @type {import('tailwindcss').Config} */
import themer from "@tailus/themer";
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./*.html", "./*.js"],
    darkMode: "class", // Changed from 'media' to 'class'
    safelist: ["isToggled"],
    theme: {
        fontFamily: {
            sans: ['Baloo Bhaijaan 2', 'Geist', 'Inter', ...defaultTheme.fontFamily.sans],
            mono: ['GeistMono', 'fira-code', ...defaultTheme.fontFamily.mono],
        },
        keyframes: {
            loop: {
                to: {
                    "offset-distance": "100%",
                },
            },
        },
    },
    plugins: [
        themer({
            palette: {
                extend: "nature"
            },
            radius: "smoothest",
            background: "light",
            border: "light",
            padding: "large",
            components: {
                button: {
                    rounded: "2xl"
                }
            }
        })
    ],
};