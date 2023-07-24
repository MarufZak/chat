const openFilePickerByInput = () => {
  const inputElement = document.createElement('input');
  inputElement.hidden = true;
  inputElement.type = 'file';
  inputElement.style.position = 'fixed';
  inputElement.style.top = '-999999px';
  inputElement.click();

  return new Promise((resolve, reject) => {
    inputElement.addEventListener('change', () => {
      const isFileExists = inputElement.files;
      if (isFileExists) {
        resolve(inputElement.files[0]);
      } else {
        reject();
      }
      inputElement.remove();
    });
  });
};

export const getFileFromFilePicker = async () => {
  if ('showOpenFilePicker' in window) {
    const [fileHandle] = await window.showOpenFilePicker();

    return fileHandle.getFile();
  }
  return openFilePickerByInput();
};

export const readFileAsText = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.addEventListener('load', (e) => {
      const result = e.target.result;
      if (result) {
        resolve(JSON.parse(result));
      } else {
        reject(result);
      }
    });
    fileReader.readAsText(file);
  });
};

export const exportFile = async (data) => {
  if ('showSaveFilePicker' in window) {
    const handle = await window.showSaveFilePicker({
      types: [
        {
          description: 'File',
          accept: {
            'application/json': ['.json'],
          },
        },
      ],
    });
    const writable = await handle.createWritable();

    await writable.write(JSON.stringify(data));
    await writable.close();
  } else {
    const anchorElement = document.createElement('a');
    anchorElement.download = 'file.json';
    anchorElement.href = `data:application/json;charset=utf-8,${encodeURI(
      JSON.stringify(data)
    )}`;
    anchorElement.click();
    anchorElement.remove();
  }
};
