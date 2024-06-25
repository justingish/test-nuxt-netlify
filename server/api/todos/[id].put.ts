import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params || {};
  const { done } = await readBody(event).catch(() => {});
  const client = await serverSupabaseClient<TodoItem>(event);

  const response = await client
    .from('Todos')
    .update({ done, completed_at: done ? new Date().toISOString() : null })
    .eq('id', id);

  return response;
});
