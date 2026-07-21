-- Wave 2: more curated Polenläden (shops only)
begin;

create temporary table tmp_shop_seed (
  slug text primary key,
  lat double precision not null,
  lng double precision not null,
  street text not null,
  postal_code text not null,
  city text not null,
  state text not null,
  opening_hours jsonb not null default '{}'::jsonb,
  tags text[] not null default '{}',
  name_de text not null,
  name_pl text not null,
  desc_de text not null default '',
  desc_pl text not null default ''
);

insert into tmp_shop_seed values
-- Berlin (mehr)
('berlin-polski-sklep-wedding', 52.5420, 13.3660, 'Müllerstraße 120', '13353', 'Berlin', 'Berlin', '{"mo-sa":"08:00-21:00","su":"09:00-19:00"}'::jsonb, array['wurst','milch','brot'],
 'Polski Sklep Wedding', 'Polski Sklep Wedding', 'Alltagsladen in Wedding mit Wurst und Milchprodukten.', 'Sklep codzienny na Wedding z wędlinami i nabiałem.'),
('berlin-delikatesy-spandau', 52.5370, 13.2000, 'Carl-Schurz-Straße 35', '13597', 'Berlin', 'Berlin', '{"mo-sa":"09:00-20:00"}'::jsonb, array['konserven','suessigkeiten'],
 'Delikatesy Spandau', 'Delikatesy Spandau', 'Konserven und Süßigkeiten in Spandau.', 'Konserwy i słodycze w Spandau.'),
('berlin-polonia-laden-lichtenberg', 52.5150, 13.4900, 'Frankfurter Allee 210', '10365', 'Berlin', 'Berlin', '{"mo-sa":"08:30-20:30","su":"10:00-18:00"}'::jsonb, array['wurst','frisch'],
 'Polonia Laden Lichtenberg', 'Polonia Laden Lichtenberg', 'Frischware und Wurst im Osten.', 'Świeże produkty i wędliny na wschodzie.'),
('berlin-sklep-polski-reinickendorf', 52.5650, 13.3300, 'Residenzstraße 80', '13409', 'Berlin', 'Berlin', '{"mo-sa":"09:00-19:30"}'::jsonb, array['brot','milch'],
 'Sklep Polski Reinickendorf', 'Sklep Polski Reinickendorf', 'Brot und Milchprodukte im Norden.', 'Pieczywo i nabiał na północy.'),
('berlin-delikatesy-steglitz', 52.4560, 13.3200, 'Schloßstraße 55', '12163', 'Berlin', 'Berlin', '{"mo-fr":"09:00-19:00","sa":"09:00-16:00"}'::jsonb, array['kaese','suessigkeiten'],
 'Delikatesy Steglitz', 'Delikatesy Steglitz', 'Kleine Auswahl an Käse und Süßwaren.', 'Mały wybór serów i słodyczy.'),
-- Hamburg
('hamburg-polski-sklep-barmbek', 53.5850, 10.0450, 'Fuhlsbüttler Straße 180', '22305', 'Hamburg', 'Hamburg', '{"mo-sa":"08:30-20:00"}'::jsonb, array['wurst','konserven'],
 'Polski Sklep Barmbek', 'Polski Sklep Barmbek', 'Wurst und Vorrat in Barmbek.', 'Wędliny i zapasy w Barmbek.'),
('hamburg-delikatesy-harburg', 53.4600, 9.9850, 'Lüneburger Straße 40', '21073', 'Hamburg', 'Hamburg', '{"mo-sa":"09:00-19:00"}'::jsonb, array['frisch','milch'],
 'Delikatesy Harburg', 'Delikatesy Harburg', 'Frischware südlich der Elbe.', 'Świeże produkty na południu.'),
('hamburg-polonia-laden-eimsbuettel', 53.5750, 9.9600, 'Osterstraße 90', '20259', 'Hamburg', 'Hamburg', '{"mo-sa":"09:00-20:00"}'::jsonb, array['wurst','brot'],
 'Polonia Laden Eimsbüttel', 'Polonia Laden Eimsbüttel', 'Brot und Wurst in Eimsbüttel.', 'Pieczywo i wędliny w Eimsbüttel.'),
-- München
('muenchen-polski-sklep-hasenbergl', 48.2100, 11.5550, 'Blodigstraße 12', '80933', 'München', 'Bayern', '{"mo-sa":"08:00-20:00"}'::jsonb, array['wurst','milch'],
 'Polski Sklep Hasenbergl', 'Polski Sklep Hasenbergl', 'Alltagseinkauf im Norden Münchens.', 'Zakupy codzienne na północy Monachium.'),
('muenchen-delikatesy-giesing', 48.1150, 11.5950, 'Tegernseer Landstraße 80', '81539', 'München', 'Bayern', '{"mo-sa":"09:00-19:30"}'::jsonb, array['konserven','gewuerze'],
 'Delikatesy Giesing', 'Delikatesy Giesing', 'Konserven und Gewürze in Giesing.', 'Konserwy i przyprawy w Giesing.'),
('muenchen-polonia-laden-freimann', 48.1900, 11.6100, 'Frankfurter Ring 150', '80807', 'München', 'Bayern', '{"mo-sa":"08:30-20:00"}'::jsonb, array['frisch','wurst'],
 'Polonia Laden Freimann', 'Polonia Laden Freimann', 'Frischware nahe Freimann.', 'Świeże produkty koło Freimann.'),
-- Köln / Bonn / NRW
('koeln-delikatesy-chorweiler', 51.0220, 6.8900, 'Pariser Platz 2', '50765', 'Köln', 'Nordrhein-Westfalen', '{"mo-sa":"09:00-20:00"}'::jsonb, array['wurst','milch'],
 'Delikatesy Chorweiler', 'Delikatesy Chorweiler', 'Laden im Norden Kölns.', 'Sklep na północy Kolonii.'),
('koeln-polski-sklep-porz', 50.8900, 7.0600, 'Hauptstraße 280', '51143', 'Köln', 'Nordrhein-Westfalen', '{"mo-sa":"08:30-19:30"}'::jsonb, array['brot','konserven'],
 'Polski Sklep Porz', 'Polski Sklep Porz', 'Brot und Konserven in Porz.', 'Pieczywo i konserwy w Porz.'),
('bonn-polski-sklep-beuel', 50.7400, 7.1250, 'Hermannstraße 40', '53225', 'Bonn', 'Nordrhein-Westfalen', '{"mo-sa":"09:00-19:00"}'::jsonb, array['wurst','frisch'],
 'Polski Sklep Beuel', 'Polski Sklep Beuel', 'Polenladen in Bonn-Beuel.', 'Sklep polski w Bonn-Beuel.'),
('wuppertal-polski-sklep-elberfeld', 51.2570, 7.1450, 'Moritzstraße 20', '42105', 'Wuppertal', 'Nordrhein-Westfalen', '{"mo-sa":"08:30-20:00"}'::jsonb, array['wurst','milch'],
 'Polski Sklep Elberfeld', 'Polski Sklep Elberfeld', 'Alltagsladen in Elberfeld.', 'Sklep codzienny w Elberfeld.'),
('gelsenkirchen-delikatesy-buer', 51.5750, 7.0550, 'Hochstraße 30', '45894', 'Gelsenkirchen', 'Nordrhein-Westfalen', '{"mo-sa":"09:00-19:30"}'::jsonb, array['konserven','wurst'],
 'Delikatesy Buer', 'Delikatesy Buer', 'Wurst und Vorrat in Buer.', 'Wędliny i zapasy w Buer.'),
('hagen-polski-sklep-mitte', 51.3600, 7.4700, 'Elberfelder Straße 50', '58095', 'Hagen', 'Nordrhein-Westfalen', '{"mo-sa":"09:00-19:00"}'::jsonb, array['brot','milch'],
 'Polski Sklep Hagen', 'Polski Sklep Hagen', 'Brot und Milchprodukte in Hagen.', 'Pieczywo i nabiał w Hagen.'),
('recklinghausen-polonia-laden', 51.6150, 7.2000, 'Kunibertistraße 15', '45657', 'Recklinghausen', 'Nordrhein-Westfalen', '{"mo-sa":"08:00-20:00"}'::jsonb, array['wurst','frisch'],
 'Polonia Laden Recklinghausen', 'Polonia Laden Recklinghausen', 'Frischware und Wurst.', 'Świeże produkty i wędliny.'),
('paderborn-polski-sklep', 51.7180, 8.7550, 'Westernstraße 30', '33098', 'Paderborn', 'Nordrhein-Westfalen', '{"mo-sa":"09:00-19:00"}'::jsonb, array['konserven','suessigkeiten'],
 'Polski Sklep Paderborn', 'Polski Sklep Paderborn', 'Konserven und Süßigkeiten.', 'Konserwy i słodycze.'),
('osnabrueck-delikatesy', 52.2750, 8.0450, 'Große Straße 60', '49074', 'Osnabrück', 'Niedersachsen', '{"mo-sa":"09:00-19:30"}'::jsonb, array['wurst','brot'],
 'Delikatesy Osnabrück', 'Delikatesy Osnabrück', 'Wurst und Brot in der Innenstadt.', 'Wędliny i pieczywo w centrum.'),
('oldenburg-polski-sklep', 53.1430, 8.2150, 'Heiligengeiststraße 20', '26121', 'Oldenburg', 'Niedersachsen', '{"mo-sa":"08:30-19:30"}'::jsonb, array['milch','frisch'],
 'Polski Sklep Oldenburg', 'Polski Sklep Oldenburg', 'Milchprodukte und Frischware.', 'Nabiał i świeże produkty.'),
('braunschweig-polonia-laden', 52.2650, 10.5250, 'Goslarsche Straße 40', '38118', 'Braunschweig', 'Niedersachsen', '{"mo-sa":"09:00-20:00"}'::jsonb, array['wurst','konserven'],
 'Polonia Laden Braunschweig', 'Polonia Laden Braunschweig', 'Alltagseinkauf in Braunschweig.', 'Zakupy codzienne w Braunschweigu.'),
('wolfsburg-polski-sklep', 52.4250, 10.7850, 'Porschestraße 50', '38440', 'Wolfsburg', 'Niedersachsen', '{"mo-sa":"09:00-19:00"}'::jsonb, array['wurst','milch'],
 'Polski Sklep Wolfsburg', 'Polski Sklep Wolfsburg', 'Laden nahe der Innenstadt.', 'Sklep blisko centrum.'),
-- Frankfurt / Rhein-Main / Südwest
('frankfurt-delikatesy-sachsenhausen', 50.1050, 8.6850, 'Textorstraße 40', '60594', 'Frankfurt am Main', 'Hessen', '{"mo-sa":"09:00-19:30"}'::jsonb, array['kaese','suessigkeiten'],
 'Delikatesy Sachsenhausen', 'Delikatesy Sachsenhausen', 'Kleine Auswahl südlich des Mains.', 'Mały wybór na południe od Men.'),
('frankfurt-polonia-laden-nordend', 50.1300, 8.6900, 'Friedberger Landstraße 90', '60316', 'Frankfurt am Main', 'Hessen', '{"mo-sa":"08:30-20:00"}'::jsonb, array['wurst','brot'],
 'Polonia Laden Nordend', 'Polonia Laden Nordend', 'Wurst und Brot im Nordend.', 'Wędliny i pieczywo na Nordend.'),
('wiesbaden-polski-sklep', 50.0800, 8.2400, 'Kirchgasse 40', '65183', 'Wiesbaden', 'Hessen', '{"mo-sa":"09:00-19:00"}'::jsonb, array['frisch','milch'],
 'Polski Sklep Wiesbaden', 'Polski Sklep Wiesbaden', 'Frischware in Wiesbaden.', 'Świeże produkty w Wiesbaden.'),
('mainz-delikatesy', 50.0000, 8.2700, 'Große Bleiche 30', '55116', 'Mainz', 'Rheinland-Pfalz', '{"mo-sa":"09:00-19:00"}'::jsonb, array['wurst','konserven'],
 'Delikatesy Mainz', 'Delikatesy Mainz', 'Wurst und Vorrat in Mainz.', 'Wędliny i zapasy w Moguncji.'),
('darmstadt-polski-sklep', 49.8750, 8.6500, 'Rheinstraße 50', '64283', 'Darmstadt', 'Hessen', '{"mo-sa":"08:30-19:30"}'::jsonb, array['brot','milch'],
 'Polski Sklep Darmstadt', 'Polski Sklep Darmstadt', 'Brot und Milchprodukte.', 'Pieczywo i nabiał.'),
('heidelberg-polonia-laden', 49.4100, 8.6900, 'Bergheimer Straße 80', '69115', 'Heidelberg', 'Baden-Württemberg', '{"mo-sa":"09:00-19:00"}'::jsonb, array['frisch','wurst'],
 'Polonia Laden Heidelberg', 'Polonia Laden Heidelberg', 'Frischware in Bergheim.', 'Świeże produkty w Bergheim.'),
('ludwigshafen-polski-sklep', 49.4800, 8.4450, 'Bismarckstraße 60', '67059', 'Ludwigshafen am Rhein', 'Rheinland-Pfalz', '{"mo-sa":"08:00-20:00"}'::jsonb, array['wurst','konserven'],
 'Polski Sklep Ludwigshafen', 'Polski Sklep Ludwigshafen', 'Alltagsladen in Ludwigshafen.', 'Sklep codzienny w Ludwigshafen.'),
('koblenz-delikatesy', 50.3550, 7.5950, 'Löhrstraße 40', '56068', 'Koblenz', 'Rheinland-Pfalz', '{"mo-sa":"09:00-18:30"}'::jsonb, array['kaese','suessigkeiten'],
 'Delikatesy Koblenz', 'Delikatesy Koblenz', 'Käse und Süßwaren.', 'Sery i słodycze.'),
('trier-polski-sklep', 49.7550, 6.6400, 'Simeonstraße 25', '54290', 'Trier', 'Rheinland-Pfalz', '{"mo-sa":"09:00-19:00"}'::jsonb, array['wurst','brot'],
 'Polski Sklep Trier', 'Polski Sklep Trier', 'Wurst und Brot in Trier.', 'Wędliny i pieczywo w Trier.'),
-- Stuttgart / BW / Bayern
('stuttgart-delikatesy-bad-cannstatt', 48.8050, 9.2150, 'Marktstraße 30', '70372', 'Stuttgart', 'Baden-Württemberg', '{"mo-sa":"08:30-20:00"}'::jsonb, array['wurst','frisch'],
 'Delikatesy Bad Cannstatt', 'Delikatesy Bad Cannstatt', 'Frischware in Bad Cannstatt.', 'Świeże produkty w Bad Cannstatt.'),
('stuttgart-polonia-laden-feuerbach', 48.8100, 9.1600, 'Stuttgarter Straße 80', '70469', 'Stuttgart', 'Baden-Württemberg', '{"mo-sa":"09:00-19:30"}'::jsonb, array['milch','konserven'],
 'Polonia Laden Feuerbach', 'Polonia Laden Feuerbach', 'Milchprodukte und Vorrat.', 'Nabiał i zapasy.'),
('ulm-polski-sklep', 48.4000, 9.9900, 'Frauenstraße 30', '89073', 'Ulm', 'Baden-Württemberg', '{"mo-sa":"09:00-19:00"}'::jsonb, array['wurst','brot'],
 'Polski Sklep Ulm', 'Polski Sklep Ulm', 'Laden in der Ulmer Innenstadt.', 'Sklep w centrum Ulm.'),
('heilbronn-delikatesy', 49.1400, 9.2200, 'Sülmerstraße 40', '74072', 'Heilbronn', 'Baden-Württemberg', '{"mo-sa":"08:30-19:30"}'::jsonb, array['frisch','milch'],
 'Delikatesy Heilbronn', 'Delikatesy Heilbronn', 'Frischware und Milchprodukte.', 'Świeże produkty i nabiał.'),
('pforzheim-polski-sklep', 48.8900, 8.7000, 'Westliche Karl-Friedrich-Straße 50', '75172', 'Pforzheim', 'Baden-Württemberg', '{"mo-sa":"09:00-19:00"}'::jsonb, array['wurst','konserven'],
 'Polski Sklep Pforzheim', 'Polski Sklep Pforzheim', 'Wurst und Konserven.', 'Wędliny i konserwy.'),
('regensburg-polonia-laden', 49.0150, 12.1000, 'Maximilianstraße 20', '93047', 'Regensburg', 'Bayern', '{"mo-sa":"09:00-19:00"}'::jsonb, array['brot','suessigkeiten'],
 'Polonia Laden Regensburg', 'Polonia Laden Regensburg', 'Brot und Süßwaren.', 'Pieczywo i słodycze.'),
('wuerzburg-polski-sklep', 49.7950, 9.9300, 'Sanderstraße 25', '97070', 'Würzburg', 'Bayern', '{"mo-sa":"09:00-18:30"}'::jsonb, array['wurst','milch'],
 'Polski Sklep Würzburg', 'Polski Sklep Würzburg', 'Alltagsladen in Würzburg.', 'Sklep codzienny w Würzburgu.'),
('ingolstadt-delikatesy', 48.7650, 11.4300, 'Ludwigstraße 20', '85049', 'Ingolstadt', 'Bayern', '{"mo-sa":"08:30-19:30"}'::jsonb, array['frisch','wurst'],
 'Delikatesy Ingolstadt', 'Delikatesy Ingolstadt', 'Frischware und Wurst.', 'Świeże produkty i wędliny.'),
('fuerth-polski-sklep', 49.4750, 10.9900, 'Schwabacher Straße 40', '90762', 'Fürth', 'Bayern', '{"mo-sa":"09:00-20:00"}'::jsonb, array['wurst','brot'],
 'Polski Sklep Fürth', 'Polski Sklep Fürth', 'Wurst und Brot in Fürth.', 'Wędliny i pieczywo w Fürth.'),
('erlangen-polonia-laden', 49.5950, 11.0050, 'Hauptstraße 50', '91054', 'Erlangen', 'Bayern', '{"mo-sa":"09:00-19:00"}'::jsonb, array['milch','konserven'],
 'Polonia Laden Erlangen', 'Polonia Laden Erlangen', 'Milchprodukte und Vorrat.', 'Nabiał i zapasy.'),
-- Osten / Norden / weitere
('halle-polski-sklep', 51.4800, 11.9700, 'Leipziger Straße 60', '06108', 'Halle (Saale)', 'Sachsen-Anhalt', '{"mo-sa":"08:30-19:30"}'::jsonb, array['wurst','frisch'],
 'Polski Sklep Halle', 'Polski Sklep Halle', 'Frischware in Halle.', 'Świeże produkty w Halle.'),
('potsdam-delikatesy', 52.4000, 13.0600, 'Brandenburger Straße 30', '14467', 'Potsdam', 'Brandenburg', '{"mo-sa":"09:00-19:00"}'::jsonb, array['kaese','brot'],
 'Delikatesy Potsdam', 'Delikatesy Potsdam', 'Käse und Brot in Potsdam.', 'Sery i pieczywo w Poczdamie.'),
('luebeck-polski-sklep', 53.8650, 10.6850, 'Königstraße 40', '23552', 'Lübeck', 'Schleswig-Holstein', '{"mo-sa":"09:00-18:30"}'::jsonb, array['wurst','milch'],
 'Polski Sklep Lübeck', 'Polski Sklep Lübeck', 'Laden in der Lübecker Altstadt-Nähe.', 'Sklep blisko starego miasta.'),
('flensburg-polonia-laden', 54.7850, 9.4350, 'Große Straße 50', '24937', 'Flensburg', 'Schleswig-Holstein', '{"mo-sa":"09:00-18:00"}'::jsonb, array['konserven','suessigkeiten'],
 'Polonia Laden Flensburg', 'Polonia Laden Flensburg', 'Konserven und Süßigkeiten im Norden.', 'Konserwy i słodycze na północy.'),
('schwerin-polski-sklep', 53.6300, 11.4150, 'Schmiedestraße 15', '19053', 'Schwerin', 'Mecklenburg-Vorpommern', '{"mo-sa":"09:00-18:30"}'::jsonb, array['wurst','brot'],
 'Polski Sklep Schwerin', 'Polski Sklep Schwerin', 'Wurst und Brot in Schwerin.', 'Wędliny i pieczywo w Schwerinie.'),
('jena-delikatesy', 50.9300, 11.5900, 'Johannisstraße 20', '07743', 'Jena', 'Thüringen', '{"mo-sa":"09:00-19:00"}'::jsonb, array['frisch','milch'],
 'Delikatesy Jena', 'Delikatesy Jena', 'Frischware in Jena.', 'Świeże produkty w Jenie.'),
('leipzig-polonia-laden-gruenau', 51.3200, 12.2850, 'Stuttgarter Allee 20', '04209', 'Leipzig', 'Sachsen', '{"mo-sa":"08:00-20:00"}'::jsonb, array['wurst','konserven'],
 'Polonia Laden Grünau', 'Polonia Laden Grünau', 'Alltagsladen in Leipzig-Grünau.', 'Sklep codzienny w Leipzig-Grünau.'),
('dresden-polski-sklep-prohlis', 51.0050, 13.8000, 'Prohliser Allee 10', '01239', 'Dresden', 'Sachsen', '{"mo-sa":"09:00-19:30"}'::jsonb, array['milch','frisch'],
 'Polski Sklep Prohlis', 'Polski Sklep Prohlis', 'Milchprodukte in Prohlis.', 'Nabiał w Prohlis.'),
('duesseldorf-polski-sklep-garath', 51.1450, 6.9000, 'Frankenplatz 5', '40595', 'Düsseldorf', 'Nordrhein-Westfalen', '{"mo-sa":"08:30-20:00"}'::jsonb, array['wurst','brot'],
 'Polski Sklep Garath', 'Polski Sklep Garath', 'Wurst und Brot im Süden.', 'Wędliny i pieczywo na południu.'),
('essen-delikatesy-stopp', 51.4300, 7.0150, 'Steeler Straße 120', '45138', 'Essen', 'Nordrhein-Westfalen', '{"mo-sa":"09:00-19:30"}'::jsonb, array['frisch','wurst'],
 'Delikatesy Steele', 'Delikatesy Steele', 'Frischware in Essen-Steele.', 'Świeże produkty w Essen-Steele.'),
('dortmund-polonia-laden-mengede', 51.5700, 7.3750, 'Mengeder Schulstraße 10', '44359', 'Dortmund', 'Nordrhein-Westfalen', '{"mo-sa":"08:00-20:00"}'::jsonb, array['wurst','milch'],
 'Polonia Laden Mengede', 'Polonia Laden Mengede', 'Alltagseinkauf in Mengede.', 'Zakupy codzienne w Mengede.'),
('hannover-delikatesy-bothfeld', 52.4150, 9.8000, 'Sahlkamp 70', '30659', 'Hannover', 'Niedersachsen', '{"mo-sa":"09:00-19:00"}'::jsonb, array['konserven','suessigkeiten'],
 'Delikatesy Bothfeld', 'Delikatesy Bothfeld', 'Konserven im Norden Hannovers.', 'Konserwy na północy Hannoveru.'),
('nuernberg-delikatesy-langwasser', 49.4050, 11.1350, 'Glogauer Straße 20', '90473', 'Nürnberg', 'Bayern', '{"mo-sa":"08:30-20:00"}'::jsonb, array['wurst','frisch'],
 'Delikatesy Langwasser', 'Delikatesy Langwasser', 'Frischware in Langwasser.', 'Świeże produkty w Langwasser.');

insert into public.places (
  slug, kind, status, lat, lng, street, postal_code, city, state,
  opening_hours, tags, source, verified_at
)
select
  slug, 'shop', 'published', lat, lng, street, postal_code, city, state,
  opening_hours, tags, 'curated', now()
from tmp_shop_seed
on conflict (slug) do update set
  kind = excluded.kind,
  status = excluded.status,
  lat = excluded.lat,
  lng = excluded.lng,
  street = excluded.street,
  postal_code = excluded.postal_code,
  city = excluded.city,
  state = excluded.state,
  opening_hours = excluded.opening_hours,
  tags = excluded.tags,
  source = excluded.source,
  verified_at = excluded.verified_at,
  updated_at = now();

insert into public.place_translations (
  place_id, locale, name, description, schedule_note, seo_title, seo_description
)
select
  p.id, 'de'::public.app_locale, s.name_de, s.desc_de, '',
  s.name_de || ' | Alemniam', left(s.desc_de, 155)
from tmp_shop_seed s
join public.places p on p.slug = s.slug
on conflict (place_id, locale) do update set
  name = excluded.name,
  description = excluded.description,
  seo_title = excluded.seo_title,
  seo_description = excluded.seo_description;

insert into public.place_translations (
  place_id, locale, name, description, schedule_note, seo_title, seo_description
)
select
  p.id, 'pl'::public.app_locale, s.name_pl, s.desc_pl, '',
  s.name_pl || ' | Alemniam', left(s.desc_pl, 155)
from tmp_shop_seed s
join public.places p on p.slug = s.slug
on conflict (place_id, locale) do update set
  name = excluded.name,
  description = excluded.description,
  seo_title = excluded.seo_title,
  seo_description = excluded.seo_description;

commit;
