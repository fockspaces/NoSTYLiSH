const { renderCheckoutPage, checkoutHandler } = require("./checkouts");

const {
  GetTotal,
  GetPie,
  GetHistogram,
  GetStacks,
} = require("../../models/Order/QueryOrder");

const getTotal = async (req, res) => {
  const data = await GetTotal();
  return res.status(200).send({ data });
};

const getPie = async (req, res) => {
  const results = await GetPie();
  const data = results.map((res) => {
    return { ...res, color: JSON.parse(res.color) };
  });
  return res.status(200).send({ data });
};

const getHistogram = async (req, res) => {
  const data = await GetHistogram();
  return res.status(200).send({ data });
};

const getStacks = async (req, res) => {
  const data = await GetStacks();
  return res.status(200).send({ data });
};

module.exports = {
  renderCheckoutPage,
  checkoutHandler,
  getTotal,
  getPie,
  getHistogram,
  getStacks,
};
