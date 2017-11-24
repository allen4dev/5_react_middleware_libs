import { normalize, schema } from 'normalizr';

const setSchema = new schema.Entity('playlists');
const setListSchema = [setSchema];

export function normalizeSetList(sets) {
  return normalize(sets, setListSchema);
}
