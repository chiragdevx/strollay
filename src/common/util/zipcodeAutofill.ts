import zipCodes from "./zipcodes";

export const lookup = (zip) => {
  if (zip.length < 5) return null;

  const obj = zipCodes.find((zipCode) => Object.keys(zipCode)[0] === zip);
  if (!obj) return null;
  return obj[zip];
};
