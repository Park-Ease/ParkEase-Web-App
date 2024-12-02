import checkUserAndCreate from '@/actions/checkUserAndCreate';

export async function GET() {
  const { status, message } = await checkUserAndCreate();
  
  return new Response(JSON.stringify({ status, message }), {
    status: status === 200 || status === 201 ? 200 : 500,
  });
}
