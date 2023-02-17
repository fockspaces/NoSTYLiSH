const handleInfo = (rawData) => {
  const filterData = rawData.map((raw) => {
    const colors = JSON.parse(`[${raw.colors}]`);
    const sizes = raw.sizes.split(",");
    const images = raw.images ? JSON.parse(raw.images) : [];
    return { ...raw, colors, sizes, images };
  });
  return filterData;
};

const passwordFilter = (user) => {
  const { id, name, email, provider, picture } = user;
  return { id, name, email, provider, picture };
};

const imagePath = (hostname, filename) => {
  return filename ? `http://${hostname}/images/${filename}` : "";
};

module.exports = {
  handleInfo,
  passwordFilter,
  imagePath,
};
