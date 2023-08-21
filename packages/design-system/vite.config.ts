import { macaronVitePlugin } from '@macaron-css/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        // @ts-expect-error
        macaronVitePlugin(),
        // dts({
        //     insertTypesEntry: true,
        // }),
    ],
    esbuild: {
        jsxInject: `import React from 'react'`,
    },
    // build: {
    //     lib: {
    //         entry: path.resolve(__dirname, 'index.ts'),
    //         name: 'design-system',
    //         formats: ['es', 'umd'],
    //         fileName: (format) => `design-system.${format}.js`,
    //     },
    //     // rollupOptions: {
    //     //     // external: ['react', 'react-dom', 'styled-components'],
    //     //     output: {
    //     //         globals: {
    //     //             react: 'React',
    //     //             'react-dom': 'ReactDOM',
    //     //             // 'styled-components': 'styled',
    //     //         },
    //     //     },
    //     // },
    // },
});