import assets from './assets';

/**
 * Convert string to input id
 */
export const parseInputID = str => (str
  .split(' ')
  .join('-')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
);



/**
 * Check if string is an image
 */
export const isImage = str => !!str.match(
  "(.(jpeg|jpg|gif|png))|(data:image/(jpeg|jpg|gif|png);?(;base64,))"
);



export const getPlaceIcon = point => {
  let placeIcon;
  point === 'collection' || point === 'coleta'
    ? placeIcon = assets.icon.arrowFilled
    : point === 'delivery' || point === 'entrega'
      ? placeIcon = assets.icon.arrowOutline
      : placeIcon = assets.icon.midStop
  return placeIcon;
};



export default {
  parseInputID,
  getPlaceIcon,
  isImage
};
