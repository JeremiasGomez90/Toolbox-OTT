import { getFiles, formatFileData } from "./helpers.js";

export async function getFilesData(req, res) {
  try {
    const { fileName } = req.query;
    const files = await getFiles();
    if (fileName) {
      if (!files.includes(fileName)) return res.status(404);
      const row = await formatFileData([fileName]);
      return res.status(200).send(row);
    }
    const rows = await formatFileData(files);
    res.status(200).send(rows);
  } catch (error) {
    res.status(400).json({ error: true, message: "An error was occurred. Msg: " + error });
  }
}

export async function getFilesList(req, res) {
  try {
    const files = await getFiles();
    res.status(200).send({ files });
  } catch (error) {
    res.status(400).json({ error: true, message: "An error was occurred. Msg: " + error });
  }
}
