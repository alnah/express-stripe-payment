const stripeController = async (req, res) => {
  console.log(req.body);
  res.send("stripe controller");
};

module.exports = stripeController;
