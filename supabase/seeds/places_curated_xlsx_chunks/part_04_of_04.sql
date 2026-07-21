begin;
create temporary table tmp_curated (
slug text primary key, kind public.place_kind, lat float8, lng float8,
street text, postal_code text, city text, state text, website text,
opening_hours jsonb, tags text[], name_de text, name_pl text,
desc_de text, desc_pl text, source_url text);
insert into tmp_curated values
('curated-xlsx-73-promo-polski-supermarket-krefeld', 'shop'::public.place_kind, 51.3437421, 6.5514864, 'Hülser Straße 137–139', '47803', 'Krefeld', 'Nordrhein-Westfalen', 'https://www.promo-supermarkt.de/', '{"raw": "Mo–So 07:00–19:00"}'::jsonb, array['xlsx','feste-standorte']::text[], 'Promo Polski Supermarket Krefeld', 'Promo Polski Supermarket Krefeld', 'Hauseigene Bäckerei; Spielecke für Kinder Polnische Traditionswaren, Backwaren, Fleisch/Wurst, Getränke, Süßwaren, Kühl- und Tiefkühlprodukte', 'Hauseigene Bäckerei; Spielecke für Kinder Polnische Traditionswaren, Backwaren, Fleisch/Wurst, Getränke, Süßwaren, Kühl- und Tiefkühlprodukte', 'https://www.promo-supermarkt.de/'),
('curated-xlsx-74-der-schlesier-koeln-porz', 'shop'::public.place_kind, 50.8840313, 7.0577138, 'Josefstraße 4', '51143', 'Köln', 'Nordrhein-Westfalen', null, '{"raw": "Mo 10:00–18:00; Di–Fr 09:30–18:00; Sa 09:00–14:00"}'::jsonb, array['xlsx','feste-standorte']::text[], 'Der Schlesier Köln-Porz', 'Der Schlesier Köln-Porz', 'Polnisch-schlesischer Lebensmittelladen Polnische Lebensmittel und Getränke, Wurstwaren und Feinkost', 'Polnisch-schlesischer Lebensmittelladen Polnische Lebensmittel und Getränke, Wurstwaren und Feinkost', 'https://www.google.com/search?q=Der+Schlesier+Josefstra%C3%9Fe+4+K%C3%B6ln'),
('curated-xlsx-75-sobieski-polnische-spezialitaeten', 'shop'::public.place_kind, 50.9382686, 7.0042853, 'Kalker Hauptstraße 181', '51103', 'Köln', 'Nordrhein-Westfalen', 'https://www.facebook.com/SobieskiPolnischeSpezialitaten/', '{"raw": "Mo–Mi 09:00–20:00; Do 09:00–21:00; Fr 09:00–20:00; Sa 08:00–21:00"}'::jsonb, array['xlsx','feste-standorte']::text[], 'Sobieski Polnische Spezialitäten', 'Sobieski Polnische Spezialitäten', 'Polnischer Supermarkt in Köln-Kalk Polnische Lebensmittel, Pierogi, Bigos, Wurst/Fleisch, Süßwaren und Getränke', 'Polnischer Supermarkt in Köln-Kalk Polnische Lebensmittel, Pierogi, Bigos, Wurst/Fleisch, Süßwaren und Getränke', 'https://www.facebook.com/SobieskiPolnischeSpezialitaten/'),
('curated-xlsx-76-lukullus-leverkusen-quettingen', 'shop'::public.place_kind, 51.0661263, 7.0278169, 'Lützenkirchener Str. 190', '51381', 'Leverkusen', 'Nordrhein-Westfalen', 'https://lukullus-laden.eu/', '{"raw": "Mo–Fr 09:00–19:00; Sa 09:00–16:00"}'::jsonb, array['xlsx','feste-standorte']::text[], 'Lukullus Leverkusen-Quettingen', 'Lukullus Leverkusen-Quettingen', 'Kostenlose Parkplätze; Geschenkkörbe, Gutscheine und kalte Platten Polnische Wurst- und Fleischwaren, Käse/Milchprodukte, Süßwaren, Getränke, Konserven, Teigwaren; je nach Filiale Presse, Kosmetik und Alkohol Seit 05.12.2009.', 'Kostenlose Parkplätze; Geschenkkörbe, Gutscheine und kalte Platten Polnische Wurst- und Fleischwaren, Käse/Milchprodukte, Süßwaren, Getränke, Konserven, Teigwaren; je nach Filiale Presse, Kosmetik und Alkohol Seit 05.12.2009.', 'https://lukullus-laden.eu/'),
('curated-xlsx-77-poloness-leverkusen', 'shop'::public.place_kind, 51.0609489, 7.0279256, 'Quettinger Str. 175', '51381', 'Leverkusen', 'Nordrhein-Westfalen', 'https://www.polones.de/', '{"raw": "Mo–Fr 09:00–19:00; Sa 09:00–16:00; So geschlossen"}'::jsonb, array['xlsx','feste-standorte']::text[], 'Poloness Leverkusen', 'Poloness Leverkusen', 'Polnische Spezialitäten; Filialbetrieb Polnische Lebensmittel und Feinkost', 'Polnische Spezialitäten; Filialbetrieb Polnische Lebensmittel und Feinkost', 'https://www.polones.de/'),
('curated-xlsx-78-lukullus-luedenscheid', 'shop'::public.place_kind, 51.2335114, 7.6209279, 'Im Olpendahl 4', '58507', 'Lüdenscheid', 'Nordrhein-Westfalen', 'https://lukullus-laden.eu/', '{"raw": "Di–Fr 09:00–18:00; Sa 09:00–15:00; Mo geschlossen"}'::jsonb, array['xlsx','feste-standorte']::text[], 'Lukullus Lüdenscheid', 'Lukullus Lüdenscheid', 'Polnische Wurst- und Fleischwaren, Käse/Milchprodukte, Süßwaren, Getränke, Konserven, Teigwaren; je nach Filiale Presse, Kosmetik und Alkohol Seit 25.04.2013.', 'Polnische Wurst- und Fleischwaren, Käse/Milchprodukte, Süßwaren, Getränke, Konserven, Teigwaren; je nach Filiale Presse, Kosmetik und Alkohol Seit 25.04.2013.', 'https://lukullus-laden.eu/'),
('curated-xlsx-79-lukullus-moenchengladbach-rheydt', 'shop'::public.place_kind, 51.1671771, 6.4425227, 'Marktstraße 11', '41236', 'Mönchengladbach', 'Nordrhein-Westfalen', 'https://lukullus-laden.eu/', '{"raw": "Mo–Fr 09:00–19:00; Sa 09:00–16:00"}'::jsonb, array['xlsx','feste-standorte']::text[], 'Lukullus Mönchengladbach-Rheydt', 'Lukullus Mönchengladbach-Rheydt', 'Frische Lieferungen aus Polen zweimal wöchentlich Polnische Wurst- und Fleischwaren, Käse/Milchprodukte, Süßwaren, Getränke, Konserven, Teigwaren; je nach Filiale Presse, Kosmetik und Alkohol Seit 21.11.2013.', 'Frische Lieferungen aus Polen zweimal wöchentlich Polnische Wurst- und Fleischwaren, Käse/Milchprodukte, Süßwaren, Getränke, Konserven, Teigwaren; je nach Filiale Presse, Kosmetik und Alkohol Seit 21.11.2013.', 'https://lukullus-laden.eu/'),
('curated-xlsx-80-polonia-market-moenchengladbach', 'shop'::public.place_kind, 51.2051997, 6.4464173, 'Eickener Str. 158', '41063', 'Mönchengladbach', 'Nordrhein-Westfalen', 'https://poloniamarket.de/', '{"raw": "Mo–Fr 09:00–20:00; Sa 08:00–18:00"}'::jsonb, array['xlsx','feste-standorte']::text[], 'Polonia Market Mönchengladbach', 'Polonia Market Mönchengladbach', 'Parkplätze vorhanden Polnische Lebensmittel und Feinkost, frische Waren, Wurst/Fleisch, Süßwaren, Getränke und haltbare Spezialitäten', 'Parkplätze vorhanden Polnische Lebensmittel und Feinkost, frische Waren, Wurst/Fleisch, Süßwaren, Getränke und haltbare Spezialitäten', 'https://poloniamarket.de/'),
('curated-xlsx-81-schlesische-spezialitaeten-polnische-delikatesse', 'shop'::public.place_kind, 51.1927945, 6.4418761, 'Lüpertzender Straße 124–126', '41061', 'Mönchengladbach', 'Nordrhein-Westfalen', null, '{"raw": "Mo geschlossen; Di–Fr 09:30–18:00; Sa 09:00–14:00; So geschlossen"}'::jsonb, array['xlsx','feste-standorte']::text[], 'Schlesische Spezialitäten / Polnische Delikatessen', 'Schlesische Spezialitäten / Polnische Delikatessen', 'Polnische und schlesische Lebensmittel, Wurstwaren und Delikatessen', 'Polnische und schlesische Lebensmittel, Wurstwaren und Delikatessen', 'https://web2.cylex.de/firma-home/schlesische-spezialitaeten---polnische-delikatessen--polski-sklep-10785031.html'),
('curated-xlsx-82-lukullus-oberhausen', 'shop'::public.place_kind, 51.5167986, 6.8466252, 'Brandenburger Str. 1', '46145', 'Oberhausen', 'Nordrhein-Westfalen', 'https://lukullus-laden.eu/', '{"raw": "Mo–Fr 09:00–18:00; Sa 09:00–15:00"}'::jsonb, array['xlsx','feste-standorte']::text[], 'Lukullus Oberhausen', 'Lukullus Oberhausen', 'Wochenmarkt direkt vor dem Laden mittwochs und samstags Polnische Wurst- und Fleischwaren, Käse/Milchprodukte, Süßwaren, Getränke, Konserven, Teigwaren; je nach Filiale Presse, Kosmetik und Alkohol', 'Wochenmarkt direkt vor dem Laden mittwochs und samstags Polnische Wurst- und Fleischwaren, Käse/Milchprodukte, Süßwaren, Getränke, Konserven, Teigwaren; je nach Filiale Presse, Kosmetik und Alkohol', 'https://lukullus-laden.eu/'),
('curated-xlsx-83-lukullus-ratingen', 'shop'::public.place_kind, 51.2933612, 6.8178895, 'Berliner Platz 15', '40880', 'Ratingen', 'Nordrhein-Westfalen', 'https://lukullus-laden.eu/', '{"raw": "Mo–Fr 09:00–18:30; Sa 09:00–15:00"}'::jsonb, array['xlsx','feste-standorte']::text[], 'Lukullus Ratingen', 'Lukullus Ratingen', 'Im Mosaik-Center; kostenlose Parkplätze Polnische Wurst- und Fleischwaren, Käse/Milchprodukte, Süßwaren, Getränke, Konserven, Teigwaren; je nach Filiale Presse, Kosmetik und Alkohol Seit 02.10.2013.', 'Im Mosaik-Center; kostenlose Parkplätze Polnische Wurst- und Fleischwaren, Käse/Milchprodukte, Süßwaren, Getränke, Konserven, Teigwaren; je nach Filiale Presse, Kosmetik und Alkohol Seit 02.10.2013.', 'https://lukullus-laden.eu/'),
('curated-xlsx-84-golly-s-recklinghausen', 'shop'::public.place_kind, 51.6126498, 7.2063837, 'Dortmunder Straße 26', '45665', 'Recklinghausen', 'Nordrhein-Westfalen', 'https://www.gollys.de/store/fachgeschaeft-recklinghausen-dortmunder-strasse-26/', '{"raw": "Di–Fr 08:00–18:00; Sa 08:00–13:00; Mo geschlossen"}'::jsonb, array['xlsx','feste-standorte']::text[], 'Golly’s Recklinghausen', 'Golly’s Recklinghausen', 'Fleischerei-Fachgeschäft Eigene schlesische/polnische Fleischerei: Wurst, Schinken und Frischfleisch; dazu Pierogi, Käse, Backwaren, Süßwaren, Getränke und Konserven', 'Fleischerei-Fachgeschäft Eigene schlesische/polnische Fleischerei: Wurst, Schinken und Frischfleisch; dazu Pierogi, Käse, Backwaren, Süßwaren, Getränke und Konserven', 'https://www.gollys.de/store/fachgeschaeft-recklinghausen-dortmunder-strasse-26/'),
('curated-xlsx-85-cafe-market-polonia-polski-sklep', 'shop'::public.place_kind, 51.857544, 8.2836646, 'Herzebrocker Straße 6', '33378', 'Rheda-Wiedenbrück', 'Nordrhein-Westfalen', null, '{"raw": "Mo–Fr 09:00–20:00; Sa 09:00–19:00; So geschlossen"}'::jsonb, array['xlsx','feste-standorte','fachmarkt']::text[], 'Cafe Market Polonia – Polski Sklep', 'Cafe Market Polonia – Polski Sklep', 'Lebensmittelmarkt mit Café Polnische Lebensmittel; je nach Geschäft Wurst und Fleisch, Käse und Milchprodukte, Backwaren, Pierogi/Tiefkühlware, Süßwaren, Getränke, Konserven und Haushaltswaren', 'Lebensmittelmarkt mit Café Polnische Lebensmittel; je nach Geschäft Wurst und Fleisch, Käse und Milchprodukte, Backwaren, Pierogi/Tiefkühlware, Süßwaren, Getränke, Konserven und Haushaltswaren', 'https://web2.cylex.de/firma-home/cafe-market-polonia-polski-sklep-katarzyna-tomaszewicz-13351543.html'),
('curated-xlsx-86-polnische-delikatessen-urszula-grubek', 'shop'::public.place_kind, 50.8868805, 8.028641, 'Hagener Straße 109', '57072', 'Siegen', 'Nordrhein-Westfalen', null, '{"raw": "Mo geschlossen; Di–Fr 10:00–18:00; Sa 10:00–14:00; So geschlossen"}'::jsonb, array['xlsx','feste-standorte']::text[], 'Polnische Delikatessen – Urszula Grubek', 'Polnische Delikatessen – Urszula Grubek', 'Polnische und schlesische Delikatessen, Wurstwaren und Feinkost', 'Polnische und schlesische Delikatessen, Wurstwaren und Feinkost', 'https://web2.cylex.de/firma-home/polnische-delikatessen-inh--urszula-grubek-13712473.html'),
('curated-xlsx-87-golly-s-unna', 'shop'::public.place_kind, 51.5514196, 7.6378183, 'Buderusstraße 19', '59427', 'Unna', 'Nordrhein-Westfalen', 'https://www.gollys.de/store/fachgeschaeft-unna-buderusstrasse-19/', '{"raw": "Di–Fr 08:00–18:00; Sa 08:00–13:00; Mo geschlossen"}'::jsonb, array['xlsx','feste-standorte']::text[], 'Golly’s Unna', 'Golly’s Unna', 'Fleischerei-Fachgeschäft Eigene schlesische/polnische Fleischerei: Wurst, Schinken und Frischfleisch; dazu Pierogi, Käse, Backwaren, Süßwaren, Getränke und Konserven', 'Fleischerei-Fachgeschäft Eigene schlesische/polnische Fleischerei: Wurst, Schinken und Frischfleisch; dazu Pierogi, Käse, Backwaren, Süßwaren, Getränke und Konserven', 'https://www.gollys.de/store/fachgeschaeft-unna-buderusstrasse-19/'),
('curated-xlsx-88-eufooma-polski-sklep', 'shop'::public.place_kind, 51.3330365, 7.0286734, 'Heiligenhauser Straße 1', '42549', 'Velbert', 'Nordrhein-Westfalen', 'https://eufooma.de/', '{"raw": "Mo–Sa 08:00–20:00; So geschlossen"}'::jsonb, array['xlsx','feste-standorte','fachmarkt']::text[], 'Eufooma Polski Sklep', 'Eufooma Polski Sklep', 'Supermarkt und Spezialitätenmarkt Polnische Lebensmittel, Desserts, Getränke, Süßwaren, Konserven, Suppen, Kaffee, Tee und Haushaltswaren', 'Supermarkt und Spezialitätenmarkt Polnische Lebensmittel, Desserts, Getränke, Süßwaren, Konserven, Suppen, Kaffee, Tee und Haushaltswaren', 'https://eufooma.de/'),
('curated-xlsx-89-polski-sklep-balgar', 'shop'::public.place_kind, 51.3323486, 7.0249118, 'Heiligenhauser Straße 41', '42549', 'Velbert', 'Nordrhein-Westfalen', null, '{"raw": "Mo 10:00–18:00; Di–Fr 09:30–18:00; Sa 08:30–14:00; So geschlossen"}'::jsonb, array['xlsx','feste-standorte']::text[], 'Polski Sklep Balgar', 'Polski Sklep Balgar', 'Polnische und schlesische Lebensmittel und Spezialitäten', 'Polnische und schlesische Lebensmittel und Spezialitäten', 'https://web2.cylex.de/firma-home/polski-sklep-velbert---schlesische-spezialitaeten-balgar-12286808.html'),
('curated-xlsx-90-sklep-polski-majka', 'shop'::public.place_kind, 51.8555138, 8.5636374, 'Fürstenstraße 12', '33415', 'Verl', 'Nordrhein-Westfalen', null, '{"raw": "Mo–Di geschlossen; Mi–Fr 09:00–18:00; Sa 09:00–16:00; So geschlossen"}'::jsonb, array['xlsx','feste-standorte','fachmarkt']::text[], 'Sklep Polski Majka', 'Sklep Polski Majka', 'Nur Mittwoch bis Samstag geöffnet Polnische Lebensmittel; je nach Geschäft Wurst und Fleisch, Käse und Milchprodukte, Backwaren, Pierogi/Tiefkühlware, Süßwaren, Getränke, Konserven und Haushaltswaren', 'Nur Mittwoch bis Samstag geöffnet Polnische Lebensmittel; je nach Geschäft Wurst und Fleisch, Käse und Milchprodukte, Backwaren, Pierogi/Tiefkühlware, Süßwaren, Getränke, Konserven und Haushaltswaren', 'https://web2.cylex.de/firma-home/sklep-polski-majka---polnische-spezialitaeten-15484029.html'),
('curated-xlsx-91-mili-polnischer-supermarkt', 'shop'::public.place_kind, 51.2709147, 7.1965692, 'Alter Markt 9', '42275', 'Wuppertal', 'Nordrhein-Westfalen', null, '{"raw": "Mo–Fr 09:00–19:00; Sa 09:00–18:00; So geschlossen"}'::jsonb, array['xlsx','feste-standorte','fachmarkt']::text[], 'Mili Polnischer Supermarkt', 'Mili Polnischer Supermarkt', 'Polnische Lebensmittel; je nach Geschäft Wurst und Fleisch, Käse und Milchprodukte, Backwaren, Pierogi/Tiefkühlware, Süßwaren, Getränke, Konserven und Haushaltswaren', 'Polnische Lebensmittel; je nach Geschäft Wurst und Fleisch, Käse und Milchprodukte, Backwaren, Pierogi/Tiefkühlware, Süßwaren, Getränke, Konserven und Haushaltswaren', 'https://onlinestreet.de/poi/UmppSUpqQ3BQYWlLSXh6bWc3L3ZzUT09'),
('curated-xlsx-92-lukullus-mainz', 'shop'::public.place_kind, 50.0211224, 8.2160251, 'Am Lemmchen 31a', '55120', 'Mainz', 'Rheinland-Pfalz', 'https://lukullus-laden.eu/', '{"raw": "Mo–Fr 09:00–19:00; Sa 09:00–16:00"}'::jsonb, array['xlsx','feste-standorte']::text[], 'Lukullus Mainz', 'Lukullus Mainz', 'Neuer Standort laut Filialseite Polnische Wurst- und Fleischwaren, Käse/Milchprodukte, Süßwaren, Getränke, Konserven, Teigwaren; je nach Filiale Presse, Kosmetik und Alkohol', 'Neuer Standort laut Filialseite Polnische Wurst- und Fleischwaren, Käse/Milchprodukte, Süßwaren, Getränke, Konserven, Teigwaren; je nach Filiale Presse, Kosmetik und Alkohol', 'https://lukullus-laden.eu/'),
('curated-xlsx-93-sklep-polski-delikatesy-marek', 'shop'::public.place_kind, 54.8053683, 9.4150459, 'Freyastraße 1', '24939', 'Flensburg', 'Schleswig-Holstein', null, '{"raw": "Mo–Fr 09:00–19:00; Sa 09:00–16:00; So geschlossen"}'::jsonb, array['xlsx','feste-standorte','fachmarkt']::text[], 'Sklep Polski Delikatesy Marek', 'Sklep Polski Delikatesy Marek', 'Polnische Lebensmittel; je nach Geschäft Wurst und Fleisch, Käse und Milchprodukte, Backwaren, Pierogi/Tiefkühlware, Süßwaren, Getränke, Konserven und Haushaltswaren', 'Polnische Lebensmittel; je nach Geschäft Wurst und Fleisch, Käse und Milchprodukte, Backwaren, Pierogi/Tiefkühlware, Süßwaren, Getränke, Konserven und Haushaltswaren', 'https://web2.cylex.de/firma-home/sklep-polski-delikatesy-marek-polnische-spezialitaeten-11606807.html'),
('curated-xlsx-94-polnische-delikatessen-u-mirka', 'shop'::public.place_kind, 54.3207643, 10.1209939, 'Boninstraße 44', '24114', 'Kiel', 'Schleswig-Holstein', 'https://polnische-delikatessen-kiel.de/', '{"raw": "Mo–Di 10:00–16:00; Mi–Do 10:00–18:00; Fr 10:00–17:00; Sa 10:00–14:00"}'::jsonb, array['xlsx','feste-standorte']::text[], 'Polnische Delikatessen „u Mirka“', 'Polnische Delikatessen „u Mirka“', 'Seit fast 20 Jahren laut Selbstdarstellung Wurst, Milchprodukte, Obst/Gemüse, Brot/Kuchen, Getränke, Konserven, Tiefkühlware, Süßwaren, Kosmetik und Presse Seit ca. 2006.', 'Seit fast 20 Jahren laut Selbstdarstellung Wurst, Milchprodukte, Obst/Gemüse, Brot/Kuchen, Getränke, Konserven, Tiefkühlware, Süßwaren, Kosmetik und Presse Seit ca. 2006.', 'https://polnische-delikatessen-kiel.de/'),
('curated-xlsx-95-polnische-spezialitaeten-luebeck', 'shop'::public.place_kind, 53.8427569, 10.6357058, 'Andersenring 21', '23560', 'Lübeck', 'Schleswig-Holstein', 'https://www.facebook.com/polnischespezialitaetenluebeck/', '{"raw": "Mo–Fr 10:00–19:00; Sa 10:00–17:00 (Quellenabgleich)"}'::jsonb, array['xlsx','feste-standorte']::text[], 'Polnische Spezialitäten Lübeck', 'Polnische Spezialitäten Lübeck', 'Polnischer Lebensmittelladen Polnische Lebensmittel und Feinkost', 'Polnischer Lebensmittelladen Polnische Lebensmittel und Feinkost', 'https://www.facebook.com/polnischespezialitaetenluebeck/'),
('curated-xlsx-96-food-plus-polski-sklep-pinneberg', 'shop'::public.place_kind, 53.6643387, 9.792646, 'Elmshorner Straße 23', '25421', 'Pinneberg', 'Schleswig-Holstein', 'https://foodplus.eu/', '{"raw": "Mo 10:00–18:00; Di–Fr 08:00–20:00; Sa 10:00–18:00; So geschlossen"}'::jsonb, array['xlsx','feste-standorte']::text[], 'Food Plus / Polski Sklep Pinneberg', 'Food Plus / Polski Sklep Pinneberg', 'Polnischer Lebensmittelladen Polnische Lebensmittel, Kühlware, Süßwaren und Getränke', 'Polnischer Lebensmittelladen Polnische Lebensmittel, Kühlware, Süßwaren und Getränke', 'https://foodplus.eu/');

insert into public.places (
  slug, kind, status, lat, lng, street, postal_code, city, state,
  website, phone, opening_hours, tags, source, source_url, verified_at
)
select slug, kind, 'published', lat, lng, street, postal_code, city, state,
  website, null, opening_hours, tags, 'curated'::public.place_source, source_url, now()
from tmp_curated
on conflict (slug) do update set
  kind = excluded.kind, status = 'published', lat = excluded.lat, lng = excluded.lng,
  street = excluded.street, postal_code = excluded.postal_code, city = excluded.city,
  state = excluded.state, website = excluded.website,
  opening_hours = excluded.opening_hours, tags = excluded.tags, source = excluded.source,
  source_url = excluded.source_url, verified_at = now(), updated_at = now();

insert into public.place_translations (place_id, locale, name, description, schedule_note, seo_title, seo_description)
select p.id, 'de', s.name_de, s.desc_de, '', s.name_de || ' | Alemniam', left(s.desc_de, 155)
from tmp_curated s join public.places p on p.slug = s.slug
on conflict (place_id, locale) do update set
  name = excluded.name, description = excluded.description,
  seo_title = excluded.seo_title, seo_description = excluded.seo_description;

insert into public.place_translations (place_id, locale, name, description, schedule_note, seo_title, seo_description)
select p.id, 'pl', s.name_pl, s.desc_pl, '', s.name_pl || ' | Alemniam', left(s.desc_pl, 155)
from tmp_curated s join public.places p on p.slug = s.slug
on conflict (place_id, locale) do update set
  name = excluded.name, description = excluded.description,
  seo_title = excluded.seo_title, seo_description = excluded.seo_description;

-- Drop OSM duplicates within ~120m of a curated shop (Excel is richer).
delete from public.places osm
where osm.source = 'osm'
  and exists (
    select 1 from public.places c
    where c.source = 'curated'
      and st_dwithin(osm.location, c.location, 120)
  );


-- Drop OSM duplicates within ~120m of a curated shop (Excel is richer).
delete from public.places osm
where osm.source = 'osm'
  and exists (
    select 1 from public.places c
    where c.source = 'curated'
      and st_dwithin(osm.location, c.location, 120)
  );

commit;

insert into public.places (
  slug, kind, status, lat, lng, street, postal_code, city, state,
  website, phone, opening_hours, tags, source, source_url, verified_at
)
select slug, kind, 'published', lat, lng, street, postal_code, city, state,
  website, null, opening_hours, tags, 'curated'::public.place_source, source_url, now()
from tmp_curated
on conflict (slug) do update set
  kind = excluded.kind, status = 'published', lat = excluded.lat, lng = excluded.lng,
  street = excluded.street, postal_code = excluded.postal_code, city = excluded.city,
  state = excluded.state, website = excluded.website,
  opening_hours = excluded.opening_hours, tags = excluded.tags, source = excluded.source,
  source_url = excluded.source_url, verified_at = now(), updated_at = now();

insert into public.place_translations (place_id, locale, name, description, schedule_note, seo_title, seo_description)
select p.id, 'de', s.name_de, s.desc_de, '', s.name_de || ' | Alemniam', left(s.desc_de, 155)
from tmp_curated s join public.places p on p.slug = s.slug
on conflict (place_id, locale) do update set
  name = excluded.name, description = excluded.description,
  seo_title = excluded.seo_title, seo_description = excluded.seo_description;

insert into public.place_translations (place_id, locale, name, description, schedule_note, seo_title, seo_description)
select p.id, 'pl', s.name_pl, s.desc_pl, '', s.name_pl || ' | Alemniam', left(s.desc_pl, 155)
from tmp_curated s join public.places p on p.slug = s.slug
on conflict (place_id, locale) do update set
  name = excluded.name, description = excluded.description,
  seo_title = excluded.seo_title, seo_description = excluded.seo_description;

-- Drop OSM duplicates within ~120m of a curated shop (Excel is richer).
delete from public.places osm
where osm.source = 'osm'
  and exists (
    select 1 from public.places c
    where c.source = 'curated'
      and st_dwithin(osm.location, c.location, 120)
  );

commit;
