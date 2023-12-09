export const customSerializer = {
    serialize: (data) => {
      return data;
    },
    deserialize: (data) => {
      if (Array.isArray(data)) {
        return data;
      }
      return [];
    },
  };