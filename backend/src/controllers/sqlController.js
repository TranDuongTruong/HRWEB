import sql from 'mssql';
import dotenv from 'dotenv';
dotenv.config();

const config = {
  user: process.env.USER,
  password: process.env.PASSWORD, 
  server: "DESKTOP-VLSVRCN\\TRANTRUONG",
  database: process.env.DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

const getPersonalData = async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query('SELECT * FROM Personal');
    res.send(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Lỗi máy chủ');
  } finally {
    sql.close();
  }
};

const addPersonalData = async (req, res) => {
  try {
    const { FirstName:firstName, LastName:lastName, MiddleInitial:middleInitial, Address1:address1, Address2:address2, City:city, State:state, Zip:zip, Email:email, PhoneNumber:phoneNumber, SocialSecurityNumber:socialSecurityNumber, DriversLicense:driversLicense, MaritalStatus:maritalStatus, Gender:gender, ShareholderStatus:shareholderStatus, BenefitPlans:benefitPlans, Ethnicity:ethnicity } = req.body;
    await sql.connect(config);
    const result = await sql.query(`INSERT INTO Personal (FirstName, LastName, MiddleInitial, Address1, Address2, City, State, Zip, Email, PhoneNumber, SocialSecurityNumber, DriversLicense, MaritalStatus, Gender, ShareholderStatus, BenefitPlans, Ethnicity) VALUES ('${FirstName}', '${LastName}', '${MiddleInitial}', '${Address1}', '${Address2}', '${City}', '${State}', '${Zip}', '${Email}', '${PhoneNumber}', '${SocialSecurityNumber}', '${DriversLicense}', '${MaritalStatus}', ${Gender ? 1 : 0}, ${ShareholderStatus ? 1 : 0}, ${BenefitPlans}, '${Ethnicity}')`);
    
    
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Lỗi máy chủ');
  } finally {
    sql.close();
  }

};

const updatePersonalData = async (req, res) => {
  try {
    const { id } = req.params;
    const { FirstName, LastName, MiddleInitial, Address1, Address2, City, State, Zip, Email, PhoneNumber, SocialSecurityNumber, DriversLicense, MaritalStatus, Gender, ShareholderStatus, BenefitPlans, Ethnicity } = req.body;
    await sql.connect(config);
    const result = await sql.query(`UPDATE Personal SET FirstName = '${FirstName}', LastName = '${LastName}', MiddleInitial = '${MiddleInitial}', Address1 = '${Address1}', Address2 = '${Address2}', City = '${City}', State = '${State}', Zip = '${Zip}', Email = '${Email}', PhoneNumber = '${PhoneNumber}', SocialSecurityNumber = '${SocialSecurityNumber}', DriversLicense = '${DriversLicense}', MaritalStatus = '${MaritalStatus}', Gender = ${Gender ? 1 : 0}, ShareholderStatus = ${ShareholderStatus ? 1 : 0}, BenefitPlans = ${BenefitPlans}, Ethnicity = '${Ethnicity}' WHERE Employee_ID = ${id}`);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Lỗi máy chủ');
  } finally {
    sql.close();
  }
};

const deletePersonalData = async (req, res) => {
  try {
    const { id } = req.params;
    await sql.connect(config);
    const result = await sql.query(`DELETE FROM Personal WHERE Employee_ID = ${id}`);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Lỗi máy chủ');
  } finally {
    sql.close();
  }
};

const getPersonalDataById = async (req, res) => {
  try {
    const { id } = req.params;
    await sql.connect(config);
    const result = await sql.query(`SELECT * FROM Personal WHERE Employee_ID = ${id}`);
    res.send(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Lỗi máy chủ');
  } finally {
    sql.close();
  }
};

export default { getPersonalData, addPersonalData, updatePersonalData, deletePersonalData, getPersonalDataById };
