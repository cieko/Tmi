import { Song } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";
import useSubscribeModal from "./useSubscribeModal";

const useOnPlay = (songs: Song[]) => {

  const player = usePlayer();
  const subscribeModal = useSubscribeModal();
  const authModal = useAuthModal();
  const { user, subscription } = useUser();

  const onPlay = (id: string) => {
    // if(!user) {
    //   return authModal.onOpen();
      // this sets the non functionality of the player to unauthenticated user
    // }

    // if (!subscription) {
    //   return subscribeModal.onOpen();
      // to check for subscription to play the song
    // }

    player.setId(id);
    player.setIds(songs.map(song => song.id));
    // play songs on each domain (only searched song or only songs in the liked song)
  };

  return onPlay;
}

export default useOnPlay;