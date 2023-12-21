import express from "express";
import methodOverride from "method-override";
import { AdminControllers } from "../controllers/adminControllers.js";
import { uploadMiddleware } from "../middlewares/uploadMiddleware.js";

export class AdminRoutes {
  constructor() {
    this.router = express.Router();
    this.controllers = new AdminControllers();

    this.router
      .get("/", this.controllers.admin)
      .get("/create", this.controllers.createGet)
      .post(
        "/create",
        uploadMiddleware.fields([
          { name: "img_front", maxCount: 1 },
          { name: "img_back", maxCount: 1 },
        ]),
        this.controllers.createPost
      )
      .get("/update/:id", this.controllers.updProduct)
      .put("/update/:id", this.controllers.updProductPut)
      .use(methodOverride("_method"))
      .delete("/delete/:id", this.controllers.delProduct);
  }
}
