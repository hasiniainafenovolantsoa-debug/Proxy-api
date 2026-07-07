import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> }
) {
  // Eto dia tsy maintsy miandry (await) ny params isika
  const { id } = await params;

  // Izay vao mandeha ny lojika-nao amin'ny Supabase
  const { data, error } = await supabase
    .from('nanao_izay_anarany_ny_table')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(data);
    }
