import Employee from "../models/Employee.js";

export const createEmployee = async (req, res) => {
    try {
        const { Employee_ID, First_Name, Last_Name, VacationDays, PaidToDate, PaidLastYear, PayRate, PayRateId } = req.body;

        // creating a new Employee object
        const employee = new Employee({
            Employee_ID, First_Name, Last_Name, VacationDays, PaidToDate, PaidLastYear, PayRate, PayRateId
        });

        // saving the new employee
        const savedUser = await employee.save();

        return res.status(200).json({
            success: true, data: {
                savedUser
            }
        });
    } catch (error) {
        console.error({ success: true, data: error });
    }
};

export const getEmployee = async (req, res, next) => {

    const { employeeId } = req.params
    const employee = await Employee.findById(employeeId);
    console.log(employee)
    return res.json({ success: true, data: employee });
};

export const getEmployeeByEmployeeID = async (req, res, next) => {

    const { Employee_ID } = req.params
    console.log("id", Employee_ID)
    const employee = await Employee.findOne({ Employee_ID: Employee_ID });
    console.log("employee", employee)

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
            console.log("backend: " + employee.employeeId)
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
        const { Employee_ID, First_Name, Last_Name, VacationDays, PaidToDate, PaidLastYear, PayRate, PayRateId } = req.body;
        console.log("updatedEmployee", Employee_ID, First_Name, Last_Name, VacationDays, PaidToDate, PaidLastYear, PayRate, PayRateId)
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.employeeId,
            { Employee_ID, First_Name, Last_Name, VacationDays, PaidToDate, PaidLastYear, PayRate, PayRateId },
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