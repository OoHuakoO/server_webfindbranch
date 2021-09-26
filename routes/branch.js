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

router.get("/", async (req, res) => {
  let data = [];
  await firestore
    .collection("branch")
    .get()
    .then(async (querySnapshot) => {
      await querySnapshot.forEach(async (doc) => {
        data.push(doc.data());
      });
    });
  return res.json({ status: 200, message: "Success", data: data });
});

module.exports = router;
