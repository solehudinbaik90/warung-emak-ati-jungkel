/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#03ac0e",
        mainHover: "#434343",
        headerBg: "#ffffff",
        headerMenu: "#F2F4F7",
        menuFont: "#656C7B",
        price: "#ff5722",
        sale: {
          left: "#3fb046",
          right: "#00aa5b"
        },
        notif: "#ef144a",
        border: "#aab4c8",
        item: {
          border: "#E5E7E9"
        },
        title: "#212121",
        meta: "#6d7588"
      },
      fontFamily: {
        sans: ["Roboto", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};
