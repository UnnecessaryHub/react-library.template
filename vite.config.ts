import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { defineConfig }  from 'vite'

export default defineConfig({
  cacheDir: './node_modules/.vite/project',

  plugins: [nxViteTsPaths()],
  test: {
    globals: true,
    cache: {
      dir: './node_modules/.vitest'
    },
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  }
})
