import { ref } from "vue";
import { defineStore } from "pinia";

export const useFontStore = defineStore('font', () => {
    const fonts = ["Arial", "Times New Roman", "Verdana"];
    const colors = ["White", "Black", "Red", "Blue"]
    const selectedFont = ref("Arial");
    const selectedColor = ref("");

    return {
        fonts,
        colors,
        selectedFont,
        selectedColor
    }
})