# Alemniam

Zweisprachige (DE/PL) polnische Rezepte-App — Next.js, Supabase-ready, Vercel.

## Lokal starten

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) → redirect auf `/de`.

### Demo-Login (lokaler Store)

- Admin: `admin@alemniam.local` + beliebiges Passwort  
- User: `demo@alemniam.local` + beliebiges Passwort  

Daten liegen in `.data/store.json` (wird beim ersten Start aus Seed erzeugt).

### Supabase (optional)

1. `.env.example` → `.env.local` mit URL + Anon Key  
2. Migration anwenden: `supabase/migrations/20260719120000_alemniam_schema.sql`  
3. Auth/Rollen über `profiles.role` / `app_metadata` (nicht `user_metadata`)

## Features (MVP)

- Rezeptseite mit flüssigem **Kochen | Einkaufen**-UI-Switch (eine URL)
- i18n `/de` + `/pl`, hreflang, JSON-LD Recipe, Sitemap
- Admin mit bilingualem Editor (TipTap) + Publish
- Kundenkonto: Merken, Einkaufslisten
- Community-Upload + Moderations-Queue
- Topical-Authority-Cluster: Regionen, Anlässe, Techniken (erweitert)
- Rezept-Familien mit Varianten-Switcher (`/rezepte/pierogi/ruskie`)
- Blog-Schicht (Guides, Lexikon, Diaspora, Kaufberater) mit Querverlinken
- Content-Map: `content/silo-map.md`, Briefs & Link-Matrix
