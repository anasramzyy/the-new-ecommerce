import { Router } from "express";
import { isAuthenticated } from "./../../middleware/authentication.middleware.js"
import { isAuthorized } from "./../../middleware/authorization.middleware.js"
import { isValid } from "./../../middleware/validation.middleware.js"
import { fileUpload, filterObject } from "../../utils/multer.js"
import { createSubCategorySchema, deleteSubCategorySchema, updateSubCategorySchema } from './../subcategory/subcategory.validation.js'
import { createSubcategory, updateSubcategory, deleteSubcategory, allSubcategories } from "./subcategory.controller.js"
const router = Router({ mergeParams: true })

// CRUD
// Create
router.post('/', isAuthenticated, isAuthorized("admin"), fileUpload(filterObject.image).single("subcategory"), isValid(createSubCategorySchema), createSubcategory)

// update
router.patch('/:subCategoryId', isAuthenticated, isAuthorized("admin"), fileUpload(filterObject.image).single("subcategory"), isValid(updateSubCategorySchema), updateSubcategory)

// delete
router.delete("/:subCategoryId", isAuthenticated, isAuthorized("admin"), isValid(deleteSubCategorySchema), deleteSubcategory)

// read
router.get("/", allSubcategories)

export default router