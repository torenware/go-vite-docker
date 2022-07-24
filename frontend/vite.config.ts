import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        watch: {
            // bind volumes don't get fs events
            // so we need to poll now.
            usePolling: true,
        },
        hmr: {
            // HMR settings instruct the browser how
            // to "phone home" in order to upgrade
            // connections to websockets. Nginx makes
            // it hard to do this on the same port
            // as the HTTP/HTTPS activity of the dev
            // server, so we separate out into a new
            // internal port (3010) and user-facing
            // port (5174)
            clientPort: 5174,
            port: 3010,
            // Once nginx is terminating this with SSL,
            // we need to tell the client to expect SSL
            protocol: 'wss',
        },
    },
    build: {
        // needed for production builds:
        manifest: 'manifest.json',
    },
});
