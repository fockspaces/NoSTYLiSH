const handleInfo = (rawData) => {
    const filterData = rawData[0].map((raw) => {
      const colors = JSON.parse(`[${raw.colors}]`);
      const sizes = raw.sizes.split(",");
      const images = raw.images ? JSON.parse(raw.images) : [];
      return { ...raw, colors, sizes, images };
    });
    return filterData;
  };

  module.exports = {
    handleInfo
  }