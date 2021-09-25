const express = require("express");
const router = express.Router();
const { firestore } = require("../firebase/config");
router.post("/", async (req, res) => {
  const { branchName } = req.body;
  await firestore
    .collection("branch")
    .where("branch", "==", branchName)
    .get()
    .then(async (querySnapshot) => {
      await querySnapshot.forEach(async (doc) => {
        await firestore
          .collection("branch")
          .doc(doc.get("branch"))
          .update({ point: doc.get("point") + 1 });
      });
    });

  return res.json({ status: 200, message: "Success" });
});

module.exports = router;
