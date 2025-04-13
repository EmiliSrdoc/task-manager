import { supabase } from "@packages/supabase/supabase-client";
import { Task } from "@packages/supabase/entity.types";
import { useQuery } from "@tanstack/react-query";

export function useGetTasks() {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw new Error(error.message);
      return (data || []) as Task[];
    },
  });
}
