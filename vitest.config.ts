// Based on Astro Vitest example - https://github.com/withastro/astro/blob/latest/examples/with-vitest/vitest.config.ts
/// <reference types="vitest" />
import { getViteConfig } from 'astro/config'

// https://vitejs.dev/config/
export default getViteConfig( {
    test: {
        testTimeout: 20_000,
        hookTimeout: 20_000,
        maxConcurrency: 50,
        /* for example, use global to avoid globals imports (describe, test, expect): */
        // globals: true,
    },
} )
