/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        steamBlue: '#2a475e', // Couleur bleue principale de Steam
        steamDarkBlue: '#1b2838', // Couleur bleue Foncé principale de Steam
        steamLightBlue:'#66c0f4', // Couleur bleue light principale de Steam
        steamGreen: '#00adee', // Couleur verte de Steam
        steamGray: '#3d4b53', // Couleur grise de Steam
        steamDarkGray: '#171a21', // Couleur grise foncée de Steam
        steamWhite: '#c7d5e0', // Couleur blanche de Steam
      },
      height: {
        '38': '9.5rem',
      }
    },
  },
  plugins: [],
}

