import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { Song } from "@/types";


// getSongs returns a Promise of array of songs
const getSongs = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  const { data, error } = await supabase
      .from('songs')
      .select('*')
      .order('created_at', { ascending: false });

  if (error) {
    console.log(error);
    
  }

  return (data as any) || [];
  // return data as any or an empty array
}

export default getSongs;
