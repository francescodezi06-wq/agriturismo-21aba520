
CREATE TYPE public.booking_status AS ENUM ('pending', 'confirmed', 'cancelled', 'rejected');

CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  room_id TEXT NOT NULL,
  room_name TEXT NOT NULL,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  guests INTEGER NOT NULL CHECK (guests > 0 AND guests <= 20),
  notes TEXT,
  status public.booking_status NOT NULL DEFAULT 'pending',
  CONSTRAINT bookings_dates_check CHECK (check_out > check_in)
);

CREATE INDEX bookings_room_dates_idx ON public.bookings (room_id, check_in, check_out) WHERE status IN ('pending','confirmed');
CREATE INDEX bookings_created_at_idx ON public.bookings (created_at DESC);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.bookings TO authenticated;
GRANT ALL ON public.bookings TO service_role;

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- No public policies: all writes/reads happen via server functions with service role.
CREATE POLICY "No direct access" ON public.bookings FOR SELECT USING (false);

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER bookings_updated_at
BEFORE UPDATE ON public.bookings
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
