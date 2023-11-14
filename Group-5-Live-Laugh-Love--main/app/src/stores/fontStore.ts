import { ref } from "vue";
import { defineStore } from "pinia";

export const useFontStore = defineStore('font', () => {
    const fonts = ["Arial", "Times New Roman", "Verdana"];
    const colors = ["white", "red", "blue"]
    const selectedFont = ref("Arial");
    const selectedColor = ref("white");

    return {
        fonts,
        colors,
        selectedFont,
        selectedColor
    }
})