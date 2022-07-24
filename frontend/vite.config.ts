import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        watch: {
            // bind volumes don't get fs events
            // so we need to poll now.
            usePolling: true,
        },
    },
    build: {
        manifest: 'manifest.json',
    },
});
