const express = require("express");
const router = express.Router();
const { firestore } = require("../firebase/config");
router.get("/", async (req, res) => {
//   const { listChoice } = req.body;
//   await listChoice.forEach(async (item) => {
//     await firestore
//       .collection("Choice")
//       .where("choice", "==", item)
//       .get()
//       .then(async (querySnapshot) => {
//         await querySnapshot.forEach(async (doc) => {
//           await firestore
//             .collection("Choice")
//             .doc(doc.get("choice"))
//             .update({ point: doc.get("point") + 1 });
//         });
//       });
//   });
  return res.json({ status: 200, message: "Success" });
});

module.exports = router;
