import { SongContextState, SongReducerAction, SongReducerActionType } from "@/types";

export const songReducer = (state: SongContextState, {type, payload}: SongReducerAction) => {
    switch(type) {
        case SongReducerActionType.SetDevice:
            return {
                ...state,
                deviceId: payload.deviceId,
                volume: payload.volume
            }
        case SongReducerActionType.ToggleIsPlaying: 
            return {
                ...state,
                isPlaying: payload
            }
        case SongReducerActionType.SetCurrentPlayingSong:
            return {
                ...state,
                selectedSongId: payload.selectedSongId,
                selectedSong: payload.selectedSong,
                isPlaying: payload.isPlaying
            }
        case SongReducerActionType.SetVolume:
            return {
                ...state,
                volume: payload
            }
        default:
            return state;
    }
}