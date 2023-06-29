import { Song } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
  const authModal = useAuthModal();
  const { user } = useUser();

  const onPlay = (id: string) => {
    if(!user) {
      return authModal.onOpen();
      // this sets the non functionality of the player to unauthenticated user
    }

    player.setId(id);
    player.setIds(songs.map(song => song.id));
    // play songs on each domain (only searched song or only songs in the liked song)
  };

  return onPlay;
}

export default useOnPlay;