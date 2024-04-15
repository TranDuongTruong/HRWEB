import mongoose from "mongoose";

const BenefitPlanSchema = new mongoose.Schema({
  Benefit_Plan_ID: {
    type: Number,
    unique: true
  },
  Plan_Name: {
    type: String,
    maxlength: 50
  },
  Deductable: {
    type: Number,
    maxlength: 50
  },
  Percentage_CoPay: {
    type: Number,
    maxlength: 50
  }
},
  {
    timestamps: true,
    versionKey: false,
  });



export default mongoose.model('BenefitPlan', BenefitPlanSchema);
