const apiURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BaseURL
    : process.env.NEXT_PUBLIC_DeployedURL;

export default apiURL;
