export const config = {
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("userInfo"))}`,
  },
};
