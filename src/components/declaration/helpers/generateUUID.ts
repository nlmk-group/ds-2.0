export const generateUUID = () => {
  let time = Date.now() || (typeof performance !== 'undefined' && performance.now() && performance.now() * 1000);
  const basePattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

  return basePattern.replace(/[xy]/g, char => {
    const randomValue = (Number(time) + Math.random() * 16) % 16 | 0;
    time = Math.floor(Number(time) / 16);
    return (char === 'x' ? randomValue : (randomValue & 0x3) | 0x8).toString(16);
  });
};
