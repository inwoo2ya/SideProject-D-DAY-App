/** @type {import('tailwindcss').Config} */
import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { join } from 'path';
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
