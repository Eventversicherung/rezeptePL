<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  exclude-result-prefixes="sm image">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="de">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Alemniam Sitemap</title>
        <style>
          :root { color-scheme: light; }
          body {
            margin: 0;
            font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;
            background: #f6f1ea;
            color: #1c1917;
            line-height: 1.45;
          }
          main { width: min(72rem, calc(100% - 2rem)); margin: 1.5rem auto 3rem; }
          h1 { font-size: clamp(1.6rem, 4vw, 2.2rem); margin: 0 0 0.4rem; }
          p { margin: 0 0 1.25rem; color: #57534e; }
          .count { font-weight: 600; color: #dc143c; }
          table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 12px; overflow: hidden; }
          th, td { padding: 0.7rem 0.85rem; text-align: left; border-bottom: 1px solid #e7e5e4; font-size: 0.92rem; vertical-align: top; }
          th { background: #dc143c; color: #fff; font-weight: 600; }
          tr:last-child td { border-bottom: 0; }
          a { color: #9f1239; word-break: break-all; }
          .meta { color: #78716c; white-space: nowrap; }
          .wrap { overflow-x: auto; border: 1px solid #e7e5e4; border-radius: 12px; }
          @media (max-width: 640px) {
            th:nth-child(n+3), td:nth-child(n+3) { display: none; }
            .meta { white-space: normal; }
          }
        </style>
      </head>
      <body>
        <main>
          <xsl:choose>
            <xsl:when test="sm:sitemapindex">
              <h1>Sitemap</h1>
              <p>
                <span class="count"><xsl:value-of select="count(sm:sitemapindex/sm:sitemap)"/></span>
                Teil-Sitemaps — Rezepte, Blog, Cluster und statische Seiten.
              </p>
              <div class="wrap">
                <table>
                  <thead>
                    <tr><th>Sitemap</th><th>Zuletzt geändert</th></tr>
                  </thead>
                  <tbody>
                    <xsl:for-each select="sm:sitemapindex/sm:sitemap">
                      <tr>
                        <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
                        <td class="meta"><xsl:value-of select="sm:lastmod"/></td>
                      </tr>
                    </xsl:for-each>
                  </tbody>
                </table>
              </div>
            </xsl:when>
            <xsl:otherwise>
              <h1>Sitemap</h1>
              <p>
                <span class="count"><xsl:value-of select="count(sm:urlset/sm:url)"/></span>
                URLs — für Suchmaschinen, mit hreflang DE/PL.
              </p>
              <div class="wrap">
                <table>
                  <thead>
                    <tr>
                      <th>URL</th>
                      <th>Zuletzt geändert</th>
                      <th>Priorität</th>
                    </tr>
                  </thead>
                  <tbody>
                    <xsl:for-each select="sm:urlset/sm:url">
                      <tr>
                        <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
                        <td class="meta"><xsl:value-of select="sm:lastmod"/></td>
                        <td class="meta"><xsl:value-of select="sm:priority"/></td>
                      </tr>
                    </xsl:for-each>
                  </tbody>
                </table>
              </div>
            </xsl:otherwise>
          </xsl:choose>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
