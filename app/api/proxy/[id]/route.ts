export async function GET(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const { data, error } = await supabase
    .from('movies') // <--- SOLOY ETO
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message, debug_id: id }, { status: 404 });
  }

  return NextResponse.json(data);
}
