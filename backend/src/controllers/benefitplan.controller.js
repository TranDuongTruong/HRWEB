import sql from 'mssql';
import sqlConfig from '../sqlConfig.js';
import { io } from '../index.js';


// Controller function to create a new benefit plan record
export const createBenefitPlan = async (req, res) => {
  const { Plan_Name, Deductable, Percentage_CoPay } = req.body;

  try {
    const pool = await sql.connect(sqlConfig);
    const result = await pool.request()
      .input('Plan_Name', sql.NVarChar(50), Plan_Name)
      .input('Deductable', sql.Decimal, Deductable)
      .input('Percentage_CoPay', sql.Int, Percentage_CoPay)
      .query(`
        INSERT INTO Benefit_Plans 
        (Plan_Name, Deductable, Percentage_CoPay) 
        VALUES 
        (@Plan_Name, @Deductable, @Percentage_CoPay)
      `);
    io.emit('benefitPlanCreated');
    res.status(201).json({ success: true, data: result.recordset[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller function to get all benefit plan records
export const getAllBenefitPlan = async (req, res) => {
  try {
    const pool = await sql.connect(sqlConfig);
    const result = await pool.request().query('SELECT * FROM Benefit_Plans');
    res.status(200).json({ success: true, data: result.recordset });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller function to get a benefit plan record by ID
export const getBenefitPlanById = async (req, res) => {
  const id = req.params.id;

  try {
    const pool = await sql.connect(sqlConfig);
    const result = await pool.request()
      .input('id', sql.Decimal, id)
      .query('SELECT * FROM Benefit_Plans WHERE Benefit_Plan_ID = @id');

    if (result.recordset.length === 0) {
      return res.status(404).json({ success: false, error: 'Benefit plan not found' });
    }

    res.status(200).json({ success: true, data: result.recordset[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller function to update a benefit plan record
export const updateBenefitPlan = async (req, res) => {
  const id = req.params.id;
  const { Plan_Name, Deductable, Percentage_CoPay } = req.body;

  try {
    const pool = await sql.connect(sqlConfig);
    const result = await pool.request()
      .input('id', sql.Decimal, id)
      .input('Plan_Name', sql.NVarChar(50), Plan_Name)
      .input('Deductable', sql.Decimal, Deductable)
      .input('Percentage_CoPay', sql.Int, Percentage_CoPay)
      .query(`
        UPDATE Benefit_Plans 
        SET Plan_Name = @Plan_Name, 
            Deductable = @Deductable, 
            Percentage_CoPay = @Percentage_CoPay 
        WHERE Benefit_Plan_ID = @id
      `);

    if (result.rowsAffected[0] > 0) {
      io.emit('benefitPlanUpdated');
      res.status(200).json({ success: true, data: result.recordset[0] });
    } else {
      res.status(404).json({ success: false, error: 'Benefit plan not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller function to delete a benefit plan record
export const deleteBenefitPlan = async (req, res) => {
  const id = req.params.id;

  try {
    const pool = await sql.connect(sqlConfig);
    const result = await pool.request()
      .input('id', sql.Decimal, id)
      .query('DELETE FROM Benefit_Plans WHERE Benefit_Plan_ID = @id');

    if (result.rowsAffected[0] > 0) {
      io.emit('benefitPlanDeleted');
      res.status(200).json({ success: true, data: {} });
    } else {
      res.status(404).json({ success: false, error: 'Benefit plan not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};
