-- Run this script in your Supabase SQL Editor

-- 1. Create a storage bucket for avatars
insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', true);

-- 2. Create Policy: Allow anyone to UPLOAD avatars
create policy "Allow public avatar uploads"
on storage.objects
for insert
to public
with check ( bucket_id = 'avatars' );

-- 3. Create Policy: Allow anyone to VIEW avatars
create policy "Allow public avatar view"
on storage.objects
for select
to public
using ( bucket_id = 'avatars' );
