-- Public blog cover / inline media bucket (CMS + future Unsplash cutover).
-- Path convention: blog/{postIdOrSlug}/{uuid}.{ext}

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'blog-media',
  'blog-media',
  true,
  5242880, -- 5 MB
  array['image/jpeg', 'image/png', 'image/webp', 'image/avif']
)
on conflict (id) do nothing;

create policy "public_read_blog_media"
  on storage.objects for select
  using (bucket_id = 'blog-media');

create policy "staff_upload_blog_media"
  on storage.objects for insert
  with check (bucket_id = 'blog-media' and public.is_staff());

create policy "staff_update_blog_media"
  on storage.objects for update
  using (bucket_id = 'blog-media' and public.is_staff())
  with check (bucket_id = 'blog-media' and public.is_staff());

create policy "staff_delete_blog_media"
  on storage.objects for delete
  using (bucket_id = 'blog-media' and public.is_staff());

-- Also allow staff to delete recipe-media (was missing).
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'storage'
      and tablename = 'objects'
      and policyname = 'staff_delete_recipe_media'
  ) then
    create policy "staff_delete_recipe_media"
      on storage.objects for delete
      using (bucket_id = 'recipe-media' and public.is_staff());
  end if;
end $$;
