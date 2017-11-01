import { has, get } from "lodash"

export const mapResponseToTracks = response => {
  return response.recenttracks.track.map(track => {
    const name = get(track, "name")
    const artist = get(track, "artist.#text")
    const timestamp = parseInt(get(track, "date.uts")) || ""
    const nowPlaying = has(track, "@attr.nowplaying")

    return {
      name,
      artist,
      timestamp,
      nowPlaying
    }
  })
}
