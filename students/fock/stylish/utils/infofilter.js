const handleInfo = (rawData) => {
  const filterData = rawData.map((raw) => {
    const colors = raw.colors ? JSON.parse(`[${raw.colors}]`) : "";
    const sizes = raw.sizes ? raw.sizes.split(",") : "";
    const images = raw.images ? JSON.parse(raw.images) : [];
    return { ...raw, colors, sizes, images };
  });
  return filterData;
};

const passwordFilter = (user) => {
  const { id, name, email, provider, picture } = user;
  return { id, name, email, provider, picture };
};

const imagePath = (origin, filename) => {
  return filename ? `${origin}/images/${filename}` : "";
};

module.exports = {
  handleInfo,
  passwordFilter,
  imagePath,
};
