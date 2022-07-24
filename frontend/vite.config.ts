import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        watch: {
            // bind volumes don't get fs events
            // so we need to poll now.
            usePolling: true,
        },
        hmr: {
            clientPort: 5174,
            port: 3010,
            //host: 'app.localhost',
        },
    },
    build: {
        manifest: 'manifest.json',
    },
});
