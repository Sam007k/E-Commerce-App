const router = require("express").Router();
const { verifyToken, verifyTokenAuthorization } = require("./verifyToken");
router.put("/:id", verifyToken, (req, res) => {
  // UPDATE
  router.put("/:id", verifyTokenAuthorization, async (req, res) => {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString();
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.staus(500).json(err);
    }
  });
});

module.exports = router;
