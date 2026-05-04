create table public.applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  preferred_language text,
  message text,
  created_at timestamptz not null default now()
);

alter table public.applications enable row level security;

create policy "anyone can submit applications"
  on public.applications for insert
  to anon, authenticated
  with check (
    char_length(full_name) between 2 and 120
    and char_length(email) between 5 and 255
    and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    and (phone is null or char_length(phone) <= 40)
    and (message is null or char_length(message) <= 2000)
  );