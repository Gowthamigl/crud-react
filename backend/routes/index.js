import express from "express"

import { getProductId,getAllProducts,createProduct,updateProduct,deleteProduct } from "../controller/products.js"

const router=express.Router()

router.get("/",getAllProducts)
router.get("/:id",getProductId)
router.post("/",createProduct)
router.patch("/:id",updateProduct)
router.delete("/:id",deleteProduct)

export default router