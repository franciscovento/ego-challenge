const createQueryParamsFromObject = (queryParams: Record<string, any>) => {
  return Object.keys(queryParams).reduce((acc, key) => {
    if (queryParams[key] !== undefined) {
      return `${acc}${key}=${queryParams[key]}&`;
    }
    return acc;
  }, '?');
};

export {
  createQueryParamsFromObject
}