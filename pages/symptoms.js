import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

const SymptomsForm = () => {
  const symptomsList = [
    "itching", "skin_rash", "nodal_skin_eruptions", "continuous_sneezing", 
    "shivering", "chills", "joint_pain", "stomach_pain", "acidity", "ulcers_on_tongue",
    "muscle_wasting", "vomiting", "burning_micturition", "spotting_urination", 
    "fatigue", "weight_gain", "anxiety", "cold_hands_and_feets", "mood_swings", 
    "weight_loss", "restlessness", "lethargy", "patches_in_throat", 
    "irregular_sugar_level", "cough", "high_fever", "sunken_eyes", "breathlessness", 
    "sweating", "dehydration", "indigestion", "headache", "yellowish_skin", "dark_urine",
    "nausea", "loss_of_appetite", "pain_behind_the_eyes", "back_pain", "constipation",
    "abdominal_pain", "diarrhoea", "mild_fever", "yellow_urine", "yellowing_of_eyes",
    "acute_liver_failure", "fluid_overload", "swelling_of_stomach", "swelled_lymph_nodes",
    "malaise", "blurred_and_distorted_vision", "phlegm", "throat_irritation", "redness_of_eyes",
    "sinus_pressure", "runny_nose", "congestion", "chest_pain", "weakness_in_limbs", 
    "fast_heart_rate", "pain_during_bowel_movements", "pain_in_anal_region", "bloody_stool", 
    "irritation_in_anus", "neck_pain", "dizziness", "cramps", "bruising", "obesity", 
    "swollen_legs", "swollen_blood_vessels", "puffy_face_and_eyes", "enlarged_thyroid", 
    "brittle_nails", "swollen_extremeties", "excessive_hunger", "extra_marital_contacts", 
    "drying_and_tingling_lips", "slurred_speech", "knee_pain", "hip_joint_pain", "muscle_weakness",
    "stiff_neck", "swelling_joints", "movement_stiffness", "spinning_movements", "loss_of_balance", 
    "unsteadiness", "weakness_of_one_body_side", "loss_of_smell", "bladder_discomfort", 
    "foul_smell_of_urine", "continuous_feel_of_urine", "passage_of_gases", "internal_itching", 
    "toxic_look_(typhos)", "depression", "irritability", "muscle_pain", "altered_sensorium", 
    "red_spots_over_body", "belly_pain", "abnormal_menstruation", "dischromic_patches", 
    "watering_from_eyes", "increased_appetite", "polyuria", "family_history", "mucoid_sputum", 
    "rusty_sputum", "lack_of_concentration", "visual_disturbances", "receiving_blood_transfusion", 
    "receiving_unsterile_injections", "coma", "stomach_bleeding", "distention_of_abdomen", 
    "history_of_alcohol_consumption", "fluid_overload", "blood_in_sputum", "prominent_veins_on_calf", 
    "palpitations", "painful_walking", "pus_filled_pimples", "blackheads", "scurring", "skin_peeling", 
    "silver_like_dusting", "small_dents_in_nails", "inflammatory_nails", "blister", 
    "red_sore_around_nose", "yellow_crust_ooze"
  ];

  const [symptoms, setSymptoms] = useState(Array(symptomsList.length).fill(false));
  const [predictedDisease, setPredictedDisease] = useState("");

  const handleCheckboxChange = (index) => {
    const updatedSymptoms = [...symptoms];
    updatedSymptoms[index] = !updatedSymptoms[index];
    setSymptoms(updatedSymptoms);
  };

  const handlePrediction = async () => {
    const symptomsString = symptoms.map((checked) => (checked ? "1" : "0")).join("");

    try {
      const response = await axios.post('/api/predict-disease', {
        symptoms: symptomsString,
      });
      setPredictedDisease(response.data.predicted_disease);
    } catch (error) {
      console.error("Error predicting disease:", error);
      alert("An error occurred while predicting the disease.");
    }
  };

  return (
    <div className="bg-white flex flex-col items-center min-h-screen px-6 py-8">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white w-full p-8 mt-8"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">Symptom Checker</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto p-2 border border-gray-200 rounded-md bg-white shadow-inner">
          {symptomsList.map((symptom, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.02 }}
              className="flex items-center"
            >
              <label className="flex items-center space-x-2 text-gray-700">
                <input
                  type="checkbox"
                  checked={symptoms[index]}
                  onChange={() => handleCheckboxChange(index)}
                  className="w-4 h-4 text-indigo-600 bg-gray-200 rounded focus:ring-indigo-500"
                />
                <span>{symptom.replace(/_/g, ' ')}</span>
              </label>
            </motion.div>
          ))}
        </div>
        
        <motion.button
          onClick={handlePrediction}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-indigo-600 text-white py-3 rounded-md mt-4 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-400"
        >
          Check Disease
        </motion.button>
        
        {predictedDisease && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-center text-xl font-semibold text-indigo-700"
          >
            Predicted Disease: {predictedDisease}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default SymptomsForm;
