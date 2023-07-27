const data = [
  "SENSE_A,1020,12,25,0.52",
  "SENSE_A,1120,13,26,0.63",
  "SENSE_A,1222,16,28.5,0.65",
  "SENSE_A,1330,18,30,0.65",
  "SENSE_B,1010,10,20,0.65",
  "SENSE_B,1110,12,21,0.62",
];

const readDataToObj = (key, accuracy, arr) =>
  arr
    .filter((el) => el.startsWith(key))
    .filter((el) => el.endsWith(accuracy))
    .map((el) => {
      const [sensor, time, temp, humidatiy, accuracy] = el.split(",");

      return {
        sensor,
        time,
        temp,
        humidatiy,
        accuracy,
      };
    });

console.log(readDataToObj("SENSE_A", 0.65, data));
