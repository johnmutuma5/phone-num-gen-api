/**
 * generate random intergers and prefix them as specified by the params
 */
export default function generateRandomNum ( min, max, prefix='0' ) {
  const numRangeMagnitude = max - min; 
  return prefix + (min + ( Math.floor(Math.random() * numRangeMagnitude)));
}
