import { readFileSync } from "fs";

export const conGameFindData =  (id) => {
  const filePath = `data/kor-con-game/level-${id}.json`
  const data = readFileSync(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log("Failed to read");
      console.log(err)
    }
    try {
      const jsonData = JSON.parse(data);
      console.log("Success");
      return jsonData;
    } catch (err) {
      console.error("Error parsing JSON:", err);
    }
  });
  return data;
};

export const conGameFindMP3 = (fileName) => {
  const filePath = `data/kor-con-game/MP3/${fileName}`
  const file = readFileSync(filePath)
  return file
}
