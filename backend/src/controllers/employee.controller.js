import Employee from "../models/Employee.js";

export const createEmployee = async (req, res) => {
    try {
        const { employeeId, firstName, lastName, vacationDays, paidToDate, paidLastYear, payRate, payRateId } = req.body;

        // creating a new Employee object
        const employee = new Employee({
            employeeId,
            firstName,
            lastName,
            vacationDays,
            paidToDate,
            paidLastYear,
            payRate,
            payRateId
        });

        // saving the new employee
        const savedUser = await employee.save();

        return res.status(200).json({
            success: true, data: {
                _id: savedUser._id,
                employeeId: savedUser.employeeId,
                firstName: savedUser.firstName,
                lastName: savedUser.lastName,
                vacationDays: savedUser.vacationDays,
                paidToDate: savedUser.paidToDate,
                paidLastYear: savedUser.paidLastYear,
                payRate: savedUser.payRate,
                payRateId: savedUser.payRateId
            }
        });
    } catch (error) {
        console.error({success: true, data: error});
    }
};

export const getEmployee = async (req, res, next) => {
    const employee = await Employee.findById(req.params.employeeId);
    return res.json({ success: true, data: employee });
};

export const getEmployees = async (req, res, next) => {
    const employees = await Employee.find();
    return res.json({ success: true, data: employees });
}

export const deleteEmployee = async (req, res, next) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.employeeId);
        if (!employee) {
            return res.status(404).json({ success: false, message: "Employee not found" });
        }
        return res.status(200).json({ success: true, message: "Employee deleted successfully" });
    } catch (error) {
        console.error({ success: false, data: error });
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export const updateEmployee = async (req, res, next) => {
    try {
        const { employeeId, firstName, lastName, vacationDays, paidToDate, paidLastYear, payRate, payRateId } = req.body;
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.employeeId,
            { employeeId, firstName, lastName, vacationDays, paidToDate, paidLastYear, payRate, payRateId },
            { new: true }
        );
        if (!updatedEmployee) {
            return res.status(404).json({ success: false, message: "Employee not found" });
        }
        return res.status(200).json({ success: true, data: updatedEmployee });
    } catch (error) {
        console.error({ success: false, data: error });
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
