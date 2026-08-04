-- Tabelul de cereri de acces timpuriu.
--
-- Politica de securitate e importantă aici: cheia din browser poate doar să
-- insereze, niciodată să citească. Fără o politică de SELECT, un vizitator care
-- găsește cheia publishable în bundle nu poate lista lead-urile. Le vezi doar
-- din panoul Supabase sau cu cheia de service.

create table if not exists public.early_access (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nume text not null,
  email text not null,
  organizatie text,
  interes text,
  sursa text,
  consimtamant_la timestamptz not null
);

comment on table public.early_access is
  'Cereri de acces la pilotul CourtSight, trimise din formularul de pe site.';
comment on column public.early_access.consimtamant_la is
  'Momentul bifării consimțământului. Necesar ca dovadă GDPR.';

alter table public.early_access enable row level security;

-- Doar insert pentru rolul anonim. Nicio politică de select: cheia publică nu
-- poate citi înapoi datele.
drop policy if exists "anon poate insera" on public.early_access;
create policy "anon poate insera"
  on public.early_access
  for insert
  to anon
  with check (true);

create index if not exists early_access_created_at_idx
  on public.early_access (created_at desc);
