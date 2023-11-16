import { ref } from "vue";
import { defineStore } from "pinia";

export const useFontStore = defineStore('font', () => {
    const fonts = ["Arial", "Times New Roman", "Verdana"];
    const colors = [null, "white", "black", "red", "blue"]
    const selectedFont = ref("Arial");
    const selectedColor = ref(null);

    return {
        fonts,
        colors,
        selectedFont,
        selectedColor
    }
})