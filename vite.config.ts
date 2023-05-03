import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// import { dependencies } from './package.json';
// function renderChunks(deps: Record<string, string>) {
//   let chunks = {};
//   Object.keys(deps).forEach((key) => {
//     if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
//     chunks[key] = [key];
//   });
//   return chunks;
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
//   build: {
//     chunkSizeWarningLimit: 1600
// }
// build: {
//   sourcemap: false,
//   rollupOptions: {
//     output: {
//       manualChunks: {
//         vendor: ['react', 'react-router-dom', 'react-dom'],
//         ...renderChunks(dependencies),
//       },
//     },
//   },
// },
})
