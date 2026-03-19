export const stripCategoryPrefix = (name: string) => {
  return name.includes(': ') ? name.split(': ')[1] : name;
};
