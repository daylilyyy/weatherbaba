module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // src 하위 파일 중 확장자가 .js,.jsx,.ts,.tsx인 파일을 대상으로 한다는 의미
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/images/sky1.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
