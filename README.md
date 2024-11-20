```
npm install axios json-server react-router-dom
```

#### TailwindCSS
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

* editar o tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

* editar o index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```
```