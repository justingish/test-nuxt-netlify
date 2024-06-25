import { serverSupabaseClient } from '#supabase/server';

export default eventHandler(async (event) => {
  const { text } = await readBody(event);
  const client = await serverSupabaseClient<TodoItem>(event);

  const response = await client.from('Todos').insert({ text });

  console.log(response);
  return response;
});
