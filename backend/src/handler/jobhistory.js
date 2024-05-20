import sql from 'mssql'
import sqlConfig from '../sqlConfig.js'
export const createJobHistoryHandler = async (jobHistoryData) => {
    const { Employee_ID, Department, Division, Start_Date, End_Date, Job_Title, Supervisor, Job_Category, Location, Departmen_Code, Salary_Type, Pay_Period, Hours_per_Week, Hazardous_Training } = jobHistoryData;

    try {
        const pool = await sql.connect(sqlConfig);
        const result = await pool.request()
            .input('Employee_ID', sql.Decimal, Employee_ID)
            .input('Department', sql.NVarChar(50), Department)
            .input('Division', sql.NVarChar(50), Division)
            .input('Start_Date', sql.DateTime, Start_Date)
            .input('End_Date', sql.DateTime, End_Date)
            .input('Job_Title', sql.NVarChar(50), Job_Title)
            .input('Supervisor', sql.Decimal, Supervisor)
            .input('Job_Category', sql.NVarChar(50), Job_Category)
            .input('Location', sql.NVarChar(50), Location)
            .input('Departmen_Code', sql.Decimal, Departmen_Code)
            .input('Salary_Type', sql.Decimal, Salary_Type)
            .input('Pay_Period', sql.NVarChar(50), Pay_Period)
            .input('Hours_per_Week', sql.Decimal, Hours_per_Week)
            .input('Hazardous_Training', sql.Bit, Hazardous_Training)
            .query(`
                INSERT INTO Job_History 
                (Employee_ID, Department, Division, Start_Date, End_Date, Job_Title, Supervisor, Job_Category, Location, Departmen_Code, Salary_Type, Pay_Period, Hours_per_Week, Hazardous_Training)
                VALUES
                (@Employee_ID, @Department, @Division, @Start_Date, @End_Date, @Job_Title, @Supervisor, @Job_Category, @Location, @Departmen_Code, @Salary_Type, @Pay_Period, @Hours_per_Week, @Hazardous_Training)
            `);
    } catch (err) {
        console.error(err);
    }
};

export const deleteJobHistoryHandler = async (jobHistoryData) => {
    const { id } = jobHistoryData;

    try {
        const pool = await sql.connect(sqlConfig);
        const result = await pool.request()
            .input('id', sql.Decimal, id)
            .query('DELETE FROM Job_History WHERE ID = @id');

        if (result.rowsAffected[0] === 0) {
            console.log('Job history not found');
        } else {
            console.log('Job history deleted successfully');
        }
    } catch (err) {
        console.error(err);
    }
};


export const updateJobHistoryHandler = async (jobHistoryData) => {
    const { id, Employee_ID, Department, Division, Start_Date, End_Date, Job_Title, Supervisor, Job_Category, Location, Departmen_Code, Salary_Type, Pay_Period, Hours_per_Week, Hazardous_Training } = jobHistoryData;

    try {
        const pool = await sql.connect(sqlConfig);
        const result = await pool.request()
            .input('id', sql.Decimal, id)
            .input('Employee_ID', sql.Decimal, Employee_ID)
            .input('Department', sql.NVarChar(50), Department)
            .input('Division', sql.NVarChar(50), Division)
            .input('Start_Date', sql.DateTime, Start_Date)
            .input('End_Date', sql.DateTime, End_Date)
            .input('Job_Title', sql.NVarChar(50), Job_Title)
            .input('Supervisor', sql.Decimal, Supervisor)
            .input('Job_Category', sql.NVarChar(50), Job_Category)
            .input('Location', sql.NVarChar(50), Location)
            .input('Departmen_Code', sql.Decimal, Departmen_Code)
            .input('Salary_Type', sql.Decimal, Salary_Type)
            .input('Pay_Period', sql.NVarChar(50), Pay_Period)
            .input('Hours_per_Week', sql.Decimal, Hours_per_Week)
            .input('Hazardous_Training', sql.Bit, Hazardous_Training)
            .query(`
                UPDATE Job_History 
                SET Employee_ID = @Employee_ID, 
                    Department = @Department, 
                    Division = @Division, 
                    Start_Date = @Start_Date, 
                    End_Date = @End_Date, 
                    Job_Title = @Job_Title, 
                    Supervisor = @Supervisor, 
                    Job_Category = @Job_Category, 
                    Location = @Location, 
                    Departmen_Code = @Departmen_Code, 
                    Salary_Type = @Salary_Type, 
                    Pay_Period = @Pay_Period, 
                    Hours_per_Week = @Hours_per_Week, 
                    Hazardous_Training = @Hazardous_Training
                WHERE ID = @id;

                SELECT * FROM Job_History WHERE ID = @id;
            `);
    } catch (err) {
        console.error(err);
    }
};
