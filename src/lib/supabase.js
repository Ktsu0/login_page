import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://epzfvqhoiwwnscuutsem.supabase.co";
const supabaseKey = "sb_publishable_Mh7kK5p7Oayk3_c94XgWcg_GiEVgKTk";
export const supabase = createClient(supabaseUrl, supabaseKey);
