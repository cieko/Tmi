"use client";

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";

const Player = () => {

  const player = usePlayer();
  // supabase allows to fetch data from client component

  const { song } = useGetSongById(player.activeId);

  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activeId) {
    return null;
  }

  return ( 
    <div
      className="
        fixed
        bottom-0
        bg-black
        w-full
        py-2
        h-[80px]
        px-4
      "
    >
      <PlayerContent 
        key={songUrl}
        song={song}
        songUrl={songUrl}
      />
      {/* whenever a keys changes, it destroys the element that was using it and re-renders a new element */}
      {/* key has been used to reset the entire hook, otherwise there will be problem loading next song */}
      {/* the hook we use unfortunately, doesn't support dynamically and modular changes */}
    </div>
  );
}

export default Player;