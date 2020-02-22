import { Router } from "express";
import drugstore from "../../../mock/drugstore";
const router = Router();

router.get("/", (req, res) => {
  console.info(req.params);
  return res.json(drugstore);
});

export default router;
