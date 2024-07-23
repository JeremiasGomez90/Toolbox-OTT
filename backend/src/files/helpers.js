import axios from "axios";
const EXTERNAL_API_URL = "https://echo-serv.tbxnet.com/v1/secret";

export async function getFiles() {
  const { files } = await axios.get(EXTERNAL_API_URL + "/files", {
    headers: {
      Authorization: 'Bearer aSuperSecretKey',
      'Content-Type': 'application/json',
    },
  })
  .then(res => res.data)
  .catch(() => {
    throw new Error("An error was occurred retrieving files list")
  });

  return files;
}

async function getFileInfo(file) {
  const fileInfo = await axios.get(`${EXTERNAL_API_URL}/file/${file}`, {
    headers: {
      Authorization: 'Bearer aSuperSecretKey',
      'Content-Type': 'application/json',
    },
  })
  .then(res => res.data)
  .catch(() => {
    console.log("An error was occurred downloading file " + file);
  });
  return fileInfo;
}

export async function formatFileData(files) {
  let rows = [];
  for (const file of files) {
    const fileInfo = await getFileInfo(file);

    if (fileInfo && fileInfo.length) {
      const info = fileInfo.split('\n');
      const headers = info[0].split(',').filter(h => h !== 'file');
      const data = info.slice(1).map(line => {
        const values = line.split(',').slice(1);
        return headers.reduce((object, header, index) => {
          object[header] = values[index];
          return object;
        }, {});
      });

      const filteredData = data.filter(d => !!d.text && !!d.number && !isNaN(d.number) && !!d.hex);

      if (filteredData.length) {
        rows.push({
          file,
          lines: [...filteredData.map(d => ({ ...d, number: Number(d.number) }))],
        })
      } else {
        console.log("The file " + file + " has incompleted information");
      }
    }
  }
  return rows;
}