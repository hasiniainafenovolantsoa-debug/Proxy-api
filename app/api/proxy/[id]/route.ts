import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase'; // Ny @/ dia miantefa mivantana amin'ny root

export async function GET(request: Request, { params }: { params: { id: string } }) {
  // Ny lojikan'ny proxy-nao eto...
}
