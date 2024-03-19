const randomIntFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const getNftPrice = randomIntFromInterval(0, 100000);
