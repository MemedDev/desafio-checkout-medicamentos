import { Router } from "express";

import drugstores from "./drugstores";

const router = Router();

router.use("/drugstores", drugstores);
export default router;
