import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';
import rehypeMermaid from 'rehype-mermaid';

import vercel from '@astrojs/vercel';

// Use different strategies based on environment
const isProduction = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

// Use 'pre-built' on Vercel/production to avoid Playwright, 'inline-svg' locally
const mermaidStrategy = isProduction || isVercel ? 'pre-built' : 'inline-svg';

console.log(`Using Mermaid strategy: ${mermaidStrategy}`);

// https://astro.build/config
export default defineConfig({
  site: 'https://emilymiaou18.github.io', // IMPORTANT: Replace with your actual domain in production
  base: '/',
  build: {
    outDir: './dist',
    client: '.', // Strange, but I have to set this to '.' to avoid the dist/client folder
    server: './server',
    srcDir: './src',
    format: 'directory',
  },
  output: 'static',
  prefetch: {
    prefetchAll: true
  },
  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkReadingTime],
      rehypePlugins: [
        [
          rehypeMermaid,
          {
            strategy:
              process.env.NODE_ENV === 'production'
                ? 'pre-mermaid'
                : 'inline-svg',
          },
        ],
      ],
      syntaxHighlight: {
        type: 'shiki',
        excludeLangs: ['mermaid'],
      },
    }),
  ],

  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'en', // Change default language here
    routing: {
      prefixDefaultLocale: false, // Change if you want /en/ instead of /
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});