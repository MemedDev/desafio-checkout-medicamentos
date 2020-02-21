import { Router } from "express";
import drugstores from "../../../mock/drugstores";
const router = Router();

router.get("/", (req, res) => {
  return res.json(drugstores);
});

export default router;
