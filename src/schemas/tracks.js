import { normalize, schema } from 'normalizr';

const trackSchema = new schema.Entity('tracks');
const trackListSchema = [trackSchema];

export function normalizeTrackList(tracks) {
  return normalize(tracks, trackListSchema);
}
