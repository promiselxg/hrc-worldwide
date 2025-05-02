export const config = {
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("userInfo"))}`,
  },
};

export const getAuthConfig = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return {
    headers: {
      Authorization: userInfo?.token ? `Bearer ${userInfo.token}` : "",
    },
  };
};
