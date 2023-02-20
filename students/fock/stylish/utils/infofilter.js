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

const imagePathConverter = (dataset) => {
  const filterData = dataset.map((data) => {
    const main_image = imagePath(data.main_image);
    const images = data.images.map((image) => imagePath(image));
    return { ...data, main_image, images };
  });
  return filterData;
};

const imagePath = (filename) => {
  return filename ? `http://${process.env.DOMAIN_NAME}/images/${filename}` : "";
};

module.exports = {
  handleInfo,
  passwordFilter,
  imagePathConverter,
};
