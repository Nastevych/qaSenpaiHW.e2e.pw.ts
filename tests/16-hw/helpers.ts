import fs from "fs";
import path from "path";

export function deleteAuthDataFileForUser(userRole: string) {
  fs.readdirSync("tests/16-hw/.auth").forEach((file) => {
    if (file.includes(`${userRole}`)) {
      fs.rmSync(path.join("tests/16-hw/.auth", file));
    }
  });
}
