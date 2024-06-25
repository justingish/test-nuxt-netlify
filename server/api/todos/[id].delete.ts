import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params || {};
  const client = await serverSupabaseClient(event);

  return await client.from('Todos').delete().eq('id', id);
});
