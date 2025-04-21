import fs from "fs";
import path from "path";

export function deleteAuthDataFileForUser (userEmail: string) {
fs.readdirSync("tests/16-hw/.auth").forEach((file) => {
    if (file.includes(`${userEmail}`)) {
      fs.rmSync(path.join("tests/16-hw/.auth", file));
    }
  });
}