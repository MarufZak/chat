const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

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

export const formatDate = (date) => {
  return formatter.format(new Date(date));
};

export const removeChatsImportFlag = (chats) => {
  const newChats = {
    ...chats,
    archived: chats.archived.map((item) => {
      if (item.imported) {
        delete item.imported;
      }
      return item;
    }),
  };
  return newChats;
};

export const sortMessagesByTime = (messages) => {
  if (!messages) {
    return [];
  }

  const result = messages.sort((a, b) => {
    return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
  });

  return result;
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
