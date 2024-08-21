import React, { useState } from "react";
import axios from "axios";
import { Flex } from "@sparrowengg/twigs-react";
import { useNavigate } from 'react-router-dom';

function Predict() {
  const smilesInput = "C[C@H](N)C(=O)N[C@@H](CCC(=O)O)C(=O)N[C@@H](C)C(=O)O";
  const [predictOutput, setPredictOutput] = useState("");
  const [prediction, setPrediction] = useState("");
  const [predictionColor, setPredictionColor] = useState('#D1D5DB');
  const navigate = useNavigate();

  const handlePredict = async () => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/umami/single/?name=${predictOutput}`);
      const result = response.data.predictions;
      
      if (result === "0") {
        setPrediction("Non Umami");
        setPredictionColor("red");
      } else if (result === "1") {
        setPrediction("Umami");
        setPredictionColor("green");
      } else {ss
        setPrediction("Unknown");
        setPredictionColor("#D1D5DB");
      }
    } catch (error) {
      console.error("Error during prediction:", error);
      setPrediction("Error");
      setPredictionColor("gray");
    }
  };
  
  const handleTrySample = () => {
    setPredictOutput(smilesInput);
  };

  return (
    <div className="bg-blue-300 mt-[25px] p-5 flex flex-col w-full items-center justify-center">
      <div className="bg-white mt-10 p-10 rounded-xl shadow-lg flex flex-col gap-12 w-[44rem]">
        <Flex flexDirection='row' gap={100}>
          <div className="flex flex-col w-full gap-5">
            <textarea
              className="bg-gray-300 w-full h-[10rem] rounded-xl p-2"
              placeholder="Sample SMILES strings"
              value={smilesInput}
              readOnly
            ></textarea>
            <button
              className="bg-blue-500 p-5 text-white rounded-full"
              onClick={handleTrySample}
            >
              Try Sample
            </button>
          </div>
          <div className="flex flex-col w-full gap-5">
            <textarea
              className="bg-gray-300 w-full h-[10rem] rounded-xl p-2"
              placeholder="Enter SMILES string"
              value={predictOutput}
              onChange={(e) => setPredictOutput(e.target.value)}
            ></textarea>
            <button
              className="bg-blue-500 p-5 text-white rounded-full"
              onClick={handlePredict}
            >
              Predict
            </button>
          </div>
        </Flex>
        <div>
          <input
            className="w-full h-[2rem] text-center rounded-full" 
            style={{ backgroundColor: predictionColor, color: 'white', fontWeight: 'bold' }}
            value={prediction}
            readOnly
          ></input>
        </div>
      </div>
      <div className="mt-4 text-center">
        <button
          className="bg-blue-500 p-5 text-white rounded-full"
          onClick={() => navigate('/predict-mini')}
        >
          Mini Batch
        </button>
        <p className="mt-1 mb-10 text-gray-700">
          *Use this option to predict multiple batches of SMILES input at once.
        </p>
      </div>
    </div>
  );
}

export default Predict;
