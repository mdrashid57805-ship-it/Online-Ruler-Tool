// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://onlinepenggaris.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it', 'id'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          ja: 'ja',
          fr: 'fr',
          de: 'de',
          pt: 'pt',
          ko: 'ko',
          it: 'it',
          id: 'id',
        },
      },
      filter: (page) => !page.includes('/404') && !page.includes('/500'),
      serialize(item) {
        if (item.links && item.links.length > 0) {
          const hasXDefault = item.links.some((l) => l.lang === 'x-default');
          if (!hasXDefault) {
            const enLink = item.links.find((l) => l.lang === 'en');
            if (enLink) {
              item.links.push({
                url: enLink.url,
                lang: 'x-default',
              });
            }
          }
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});

