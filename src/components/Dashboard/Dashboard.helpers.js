const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

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
