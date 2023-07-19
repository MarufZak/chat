const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
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
