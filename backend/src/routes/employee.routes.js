import { Router } from "express";
import { createEmployee, getEmployees, getEmployee, deleteEmployee, updateEmployee ,getEmployeeByEmployeeID} from "../controllers/employee.controller.js";

import { isAdmin, verifyToken } from "../middlewares/authJwt.js";
import { checkExistingUser } from "../middlewares/verifySignup.js";

const router = Router();


router.post("/", createEmployee);
router.get("/", getEmployees);

router.delete("/:employeeId", deleteEmployee); // Thêm router xoá nhân viên
router.put("/:employeeId", updateEmployee); // Thêm router chỉnh sửa nhân viên


// router.post("/", [verifyToken, isAdmin, checkExistingUser], createEmployee);
// router.get("/", [verifyToken, isAdmin, checkExistingUser], getEmployees);
//router.get("/:employeeId", [verifyToken, isAdmin, checkExistingUser], getEmployee);
router.get("/:employeeId",  getEmployee);
router.get("/checkEmployeeId/:employeeId", getEmployeeByEmployeeID);
export default router;
