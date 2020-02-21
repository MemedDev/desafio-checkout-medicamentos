import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  return res.json({
    drugstores: "drugstores"
  });
});

export default router;
