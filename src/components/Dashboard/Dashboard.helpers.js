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
