module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'model-photo': "url('./Assets/black.jpg')",
        'treatment' :"url('./Assets/treatment.jpg')",
        'braid' :"url('./Assets/braid.jpg')",
        'color' :"url('./Assets/color.jpg')",
        'haircut' :"url('./Assets/haircut.jpg')",
      }
    },
  },
  plugins: [],
}
