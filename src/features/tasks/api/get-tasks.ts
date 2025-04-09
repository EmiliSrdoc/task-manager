import { supabase } from "@packages/supabase/supabase-client";
import { Task } from "@packages/supabase/entity.types";

export async function getTasks(): Promise<Task[]> {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
}
