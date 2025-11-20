import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

export default () => {
  const nextConfig: NextConfig = {
    /* config options here */
  };
  const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
  return withNextIntl(nextConfig);
};
