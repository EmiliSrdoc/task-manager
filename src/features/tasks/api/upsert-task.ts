import { supabase } from "@packages/supabase/supabase-client";
import { Task } from "@packages/supabase/entity.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type UpsertTaskInput = {
  id?: number;
  title: string;
  description?: string | null;
  is_done?: boolean;
};

export function useUpsertTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (task: UpsertTaskInput) => {
      const { data, error } = await supabase
        .from("tasks")
        .upsert([task], {
          onConflict: "id",
          ignoreDuplicates: false,
        })
        .select()
        .single();

      if (error) throw new Error(error.message);
      return data as Task;
    },
    onSuccess: () => {
      // Invalidate and refetch tasks query
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}
