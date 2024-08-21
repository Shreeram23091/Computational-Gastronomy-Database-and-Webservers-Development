import React, { useState } from "react";
import axios from "axios";
import { Flex } from "@sparrowengg/twigs-react";

function PredictMini() {
  const sampleInput = 
    "CC(C)[C@H](N)C(=O)NCC(=O)O\n" +
    "NCC(=O)N[C@@H](CC(=O)O)C(=O)O\n" +
    "O=C(O)CNC(=O)CNC(=O)[C@@H]1CCCN1\n" +
    "CC(C)C[C@H](NC(=O)[C@H](C)N)C(=O)O";
  
  const [smilesInput, setSmilesInput] = useState(sampleInput);
  const [predictions, setPredictions] = useState([]);
  const [finalSmilesInput, setFinalSmilesInput] = useState("");
  const [isPredictionMade, setIsPredictionMade] = useState(false);

  const handlePredict = async () => {
    const smilesArray = finalSmilesInput.split("\n").filter(smile => smile.trim() !== "");
    
    if (smilesArray.length < 2 || smilesArray.length > 10) {
      alert("Please enter between 2 to 10 SMILES strings.");
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/umami/batch', {
        smiles: smilesArray,
      });
      setPredictions(response.data.predictions);
      setIsPredictionMade(true);
    } catch (error) {
      console.error("Error predicting:", error);
    }
  };

  const handleUseSample = () => {
    setFinalSmilesInput(smilesInput);
  }

  return (
    <div className="flex mt-[25px] p-5 bg-blue-300 flex-col w-full items-center justify-center">
      <div className="bg-white flex-col mt-10 p-10 rounded-xl shadow-lg flex gap-12 w-[46rem]">
        <div className="flex flex-row gap-12">
          <div className="flex gap-5 flex-col w-full">
            <textarea
              className="bg-gray-300 w-full h-[10rem] rounded-xl p-2"
              placeholder="Sample SMILES strings"
              value={smilesInput}
              readOnly
            ></textarea>
            <button
              className="bg-blue-500 p-5 text-white rounded-full"
              onClick={handleUseSample}
            >
              Use Sample
            </button>
          </div>
          <div className="flex gap-5 flex-col w-full">
            <textarea
              className="bg-gray-300 w-full h-[10rem] rounded-xl p-2"
              placeholder="Enter 2 to 10 SMILES strings, each on a new line"
              value={finalSmilesInput}
              onChange={(e) => setFinalSmilesInput(e.target.value)}
            ></textarea>
            <button
              className="bg-blue-500 p-5 text-white rounded-full"
              onClick={handlePredict}
            >
              Predict
            </button>
          </div>
        </div>
        {isPredictionMade && (
          <div className="mt-5">
            <table className="min-w-full bg-white border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="border px-4 py-2 text-left">SMILES INPUT</th>
                  <th className="border px-4 py-2 text-left">Taste</th>
                </tr>
              </thead>
              <tbody>
                {predictions.map((prediction, index) => (
                  <tr key={index} className="even:bg-gray-100 odd:bg-white">
                    <td className="border px-4 py-2">{prediction.smiles}</td>
                    <td
                      className="border px-4 py-2 text-center"
                      style={{
                        backgroundColor: prediction.prediction === "Umami" ? "green" : "red",
                        color: 'white',
                        fontWeight: 'bold',
                        borderRadius: '5px',
                      }}
                    >
                      {prediction.prediction}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default PredictMini;
