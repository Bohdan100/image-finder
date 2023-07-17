export const getThemeStorage = (key: string): "light" | "dark" => {
  let value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
  return "light";
};

export const changeThemeStorage = (key: string, value: string) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
