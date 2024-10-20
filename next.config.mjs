
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import nextI18nConfig from './next-i18next.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: nextI18nConfig.i18n,
  // Aquí puedes agregar otras configuraciones si las necesitas
};

export default nextConfig;