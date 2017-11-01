import { mapResponseToTracks } from "../lastfm"
import { recentTracksResponse } from "../__mocks__/lastfm.mocks"

describe("mapResponseToTracks", function() {
  const tracks = [
    {
      name: "Purrfect",
      artist: "Funki Porcini",
      nowPlaying: true,
      timestamp: ""
    },
    {
      name: "Stormy Cloud",
      artist: "DJ Krush",
      nowPlaying: false,
      timestamp: 1501807419
    }
  ]
  it("can map response to tracks", function() {
    expect(mapResponseToTracks(recentTracksResponse)).toEqual(tracks)
  })
})
