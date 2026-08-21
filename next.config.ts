import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

function supabaseHostname(): string | null {
  const raw = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!raw) return null;
  try {
    return new URL(raw).hostname;
  } catch {
    return null;
  }
}

const supabaseHost = supabaseHostname();

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/de/:path*",
        headers: [{ key: "Content-Language", value: "de" }],
      },
      {
        source: "/pl/:path*",
        headers: [{ key: "Content-Language", value: "pl" }],
      },
      {
        source: "/sitemap.xsl",
        headers: [
          {
            key: "Content-Type",
            value: "application/xslt+xml; charset=utf-8",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      // Own media in Supabase Storage (blog-media / recipe-media / place-media)
      ...(supabaseHost
        ? [
            {
              protocol: "https" as const,
              hostname: supabaseHost,
              pathname: "/storage/v1/object/public/**",
            },
          ]
        : []),
    ],
  },
};

export default withNextIntl(nextConfig);
