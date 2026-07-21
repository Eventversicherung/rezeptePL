-- Allow OpenStreetMap-sourced places
alter type public.place_source add value if not exists 'osm';
