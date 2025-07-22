const mongoose = require('mongoose');
const document = require('./Document')
const clientSchema = new mongoose.Schema({

    phone: String,
    phone2: [String],
    name: String,
    email: {
        address: String,
        available: Boolean
    },
    age: Number,
    healthFund: String, // קופת חולים
    city: String,
    insurance:Boolean, // ביטוח משלים
    childrenCount: Number,
    obstetricHistory: String,
    cesareans: Number,
    bleedingDays: Number,
    heavyBleeding: Boolean,
    weight: Number,
    height: Number,
    Cruises: Number,
    Currently_breastfeeding: Boolean,
    Regular_medications: String,
    Attending_physician: String,
    Underlying_diseases: String,
    Our_comments: String,
    Polycystic_ovaries: Boolean,
    LH_before_dieting: Number,
    FSH_before_dieting: Number,
    LH_after_dieting: Number,
    FSH_after_dieting: Number,
    Androgens: Boolean,
    AFC: {
        type: String,
        enum: ["Correct", "Incorrect"]
    },
    Diet_start_date: String,
    Medicines_and_vitamins: String,
    Intermenstrual_bleeding: Boolean,
    Normal_weight: {
        type: String,
        enum: ["Normall", "hight", "low"]
    },
    FSH:Number,
    Low_ovarian_reserve: Boolean,
    AMH: Number,
    DHEA: Boolean,
    Q10: Boolean,
    Genetics: {
        type: String,
        enum: ["Correct", "Incorrect"]
    },
    Male_fertility: Boolean,
    boy: {
        Varicocele: {
            type: String,
            enum: ["Correct", "Incorrect"]
        },
        Tests: {
            type: String,
            enum: ["Correct", "Incorrect"]
        },
        Inflammation: Boolean,
        Functional_Problems: Boolean,
        Hormones: {
            type: String,
            enum: ["Correct", "Incorrect"]
        },
        Medications_and_Vitamins: String,
    },
    Infertility: Boolean,
    Hysteroscopy: {
        type: String,
        enum: ["Correct", "Incorrect"]
    },
    Uterine_X_ray: {
        type: String,
        enum: ["Correct", "Incorrect"]
    },
    Profile: {
        type: String,
        enum: ["Correct", "Incorrect"]
    },
    Follow_up: {
        type: String,
        enum: ["Correct", "Incorrect"]
    },
    Lining_thickness_at_ovulation:Number,
    Day21:{
        Estradiol:Number,
        Progesterone:Number
    },
    Fluid_in_the_pelvis_or_uterus: {
        type: String,
        enum: ["Yes", "No"]
    },
Virgocele: {
        type: String,
        enum: ["Yes", "No"]
    },
    Menstrual_tests: {
        type: String,
        enum: ["Correct", "Incorrect"]
    },
    Coagulation: {
        type: String,
        enum: ["Correct", "Incorrect"]
    },
    Thyroid_gland: {
        type: String,
        enum: ["Correct", "Incorrect"]
    },
    Recurrent_miscarriages:Boolean,
Number_of_miscarriages:Number,
miscarriages_weeks:Number,
Spotting_before_miscarriage: {
        type: String,
        enum: ["Yes", "No"]
    },
    Sac_without_embryo: {
        type: String,
        enum: ["Yes", "No"]
    },
    Fruits_compatible_in_size: {
        type: String,
        enum: ["Yes", "No"]
    },
    Hysteroscopy: {
        type: String,
        enum: ["Correct", "Incorrect"]
    },
    Folic_acid_5_mg: {
        type: String,
        enum: ["Yes", "No"]
    },
    Coagulation: {
        type: String,
        enum: ["Correct", "Incorrect"]
    },
    MTHFR: {
        type: String,
        enum: ["Correct", "Incorrect"]
    },
    Lupus: {
        type: String,
        enum: ["Correct", "Incorrect"]
    },
    Autoimmune: {
        type: String,
        enum: ["Correct", "Incorrect"]
    },
    Progesterone_and_support: {
        type: String,
        enum: ["Yes", "No"]
    },
    Mucosal_inflammatory_infection: {
        type: String,
        enum: ["Yes", "No"]
    },
    IVIG: {
        type: String,
        enum: ["Correct", "Incorrect"]
    },
    Bleeding_during_pregnancy:Boolean,
    Bleeding_during_pregnancy_Week:Number,
    Hematoma_size:String,
    Saving:{
        type: String,
        enum: ["Yes", "No"]
    },
    Protein_powder:{
        type: String,
        enum: ["Yes", "No"]
    },
    Utrogestan:String,
    Instructions_regarding_discontinuation:{
        type: String,
        enum: ["Yes", "No"]
    },
    Moxifen:{
        type: String,
        enum: ["Yes", "No"]
    },
    Contractions_or_cervical_shortening:Boolean,
    Neck_length:Number,
    Birth_history:String,
    Medications:String,
    Pregnancy_complications:Boolean,
    Gestational_diabetes:Boolean,
    Prevention:Boolean,
    Bleeding_during_breastfeeding:Boolean,
    Other:Boolean,
    Other_des:String,
    documents:{
        type:[document]
    }
})
module.exports = mongoose.model('Client', clientSchema);