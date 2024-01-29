import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import { loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      'process.env.AUTH_DOMAIN': JSON.stringify(env.AUTH_DOMAIN),
      'process.env.DATABASE_URL': JSON.stringify(env.DATABASE_URL),
      'process.env.PROJECT_ID': JSON.stringify(env.PROJECT_ID),
      'process.env.STORAGE_BUCKET': JSON.stringify(env.STORAGE_BUCKET),
      'process.env.MESSAGING_SENDER_ID': JSON.stringify(env.MESSAGING_SENDER_ID),
      'process.env.APP_ID': JSON.stringify(env.APP_ID),
      'process.env.MEASUREMENT_ID': JSON.stringify(env.MEASUREMENT_ID)
      // If you want to exposes all env variables, which is not recommended
      // 'process.env': env
    }
  }
})
// export default defineConfig({
//   plugins: [
//     vue(),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })
