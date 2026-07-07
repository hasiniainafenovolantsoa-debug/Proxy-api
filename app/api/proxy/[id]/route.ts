export async function GET(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  console.log("ID voaray:", id); // Ity dia hiseho ao amin'ny Vercel Logs

  const { data, error } = await supabase
    .from('nanao_izay_anarany_ny_table')
    .select('*')
    .eq('id', id) // Raha UUID ny column, ity dia tokony ekena tsara
    .single();

  if (error) {
    // Mba hahafantarana ny tena olana, avereno ny error avy ao amin'ny Supabase
    return NextResponse.json({ error: error.message, id_voaray: id }, { status: 404 });
  }

  return NextResponse.json(data);
}
