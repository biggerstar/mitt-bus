import {defineConfig} from 'vite'
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        dts({
            copyDtsFiles: false,
            rollupTypes: true,
            clearPureImport: true,
            logLevel: 'silent'
        }),
    ],
    build: {
        lib: {
            formats: ['es'],
            entry: './src/main.ts'
        }
    }
})
