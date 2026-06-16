# 📸 My Photo Gallery

A beautiful personal photo archive built with React + Tailwind CSS.

## How to Add Photos

1. Copy your photo files (1.png, 2.png, etc.) into **`public/photos/`**
2. Open **`src/photos.js`**
3. Add a new entry:

```js
{
  id: 6,                          // next number
  file: "6.png",                  // must match filename exactly
  title: "My Vacation",           // shown on the card
  category: "Travel",             // any category word
  date: "2024-07-20",             // optional
  description: "Beach trip",      // optional
},
```

4. Save → done! 🎉

## Run Locally

```bash
npm install
npm start
```

Open http://localhost:3000

## Deploy to Vercel

See SETUP_GUIDE.txt for full step-by-step instructions.
