export const MEETUP_LOAD = '@meetup/LOAD';

export function loadMeetup(data) {
  return {
    type: MEETUP_LOAD,
    payload: { data },
  };
}
