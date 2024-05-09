export function parseCategories(data) {
  return data.map((item) => {
    return {
      id: item.id,
      name: item?.attributes?.name ?? "",
    };
  });

  return [];
}
