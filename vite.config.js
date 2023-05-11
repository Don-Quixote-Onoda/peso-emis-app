import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
});

// import reactRefresh from '@vitejs/plugin-react-refresh';

// export default {
//   plugins: [reactRefresh()],
//   build: {
//     outDir: 'public', // Output directory for built files
//     emptyOutDir: true, // Clear the output directory before building
//     rollupOptions: {
//       input: 'resources/js/app.jsx', // Entry file for your React app
//     },
//   },
// };
