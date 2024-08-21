// PredictMenu.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Flex, Text } from '@sparrowengg/twigs-react';
import './index.css';

const PredictMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Flex flexDirection='column' alignItems='center' justifyContent='center' style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
      <Text style={{ fontSize: 30, marginBottom: 50 }}>Select Batch Type</Text>

      <Flex flexDirection='row' gap={200} alignItems='center'>
        <div className="mb-8 text-center">
          <Button
            onClick={() => navigate('/predict')}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            style={{ fontSize: '18px', width: '150px', marginBottom: 20}}
          >
            Single Batch
          </Button>
          <Text className="mt-2 text-gray-700">
            *Use this option to predict a single batch of SMILES input.
          </Text>
        </div>

        <div className="mb-8 text-center">
          <Button
            onClick={() => navigate('/predict-mini')}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            style={{ fontSize: '18px', width: '150px' , marginBottom: 20}}
          >
            Mini Batch
          </Button>
          <Text className="mt-2 text-gray-700">
            *Use this option to predict multiple batches of SMILES input at once.
          </Text>
        </div>
      </Flex>
    </Flex>
  );
};

export default PredictMenu;
