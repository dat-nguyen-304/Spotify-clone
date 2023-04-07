import { usePlaylistContext } from "@/contexts/PlaylistContext";

const Center = () => {
  const { playlistContextState } = usePlaylistContext();
  return (
    <div className="flex-grow text-white relative h-screen overflow-y-scroll scrollbar-hidden">
      <h1>{playlistContextState.selectedPlaylist?.name}</h1>
    </div>
  );
};

export default Center;
