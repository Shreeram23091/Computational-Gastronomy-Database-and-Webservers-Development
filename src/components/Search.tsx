import React, { useState } from "react";
import { Flex, Input, Button, Text } from "@sparrowengg/twigs-react";

const UmamiDB: React.FC = () => {
  const [sequence, setSequence] = useState("");
  const [taste, setTaste] = useState("");
  const [smile, setSmile] = useState("");

  const handleSearch = () => {
    // Implement search logic to find the intersection of all three inputs
    console.log("Search by Sequence:", sequence);
    console.log("Search by Taste:", taste);
    console.log("Search by SMILE:", smile);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center" style={{ marginTop: '150px' }}>
      <Flex flexDirection='column' gap={40} alignItems='center' style={{ width: '100%', padding: '0 20px' }}>
        <Flex flexDirection='row' gap={50} style={{ width: '100%', maxWidth: '1200px' }}>
          <div className="flex flex-col w-full">
            <Text style={{ marginBottom: '15px', fontSize: '18px', fontWeight: 'bold' }}>Search by Sequence</Text>
            <Input
              placeholder="Enter Sequence"
              value={sequence}
              onChange={(e) => setSequence(e.target.value)}
              className="w-full p-4 rounded-xl text-lg"
            />
          </div>
          <div className="flex flex-col w-full">
            <Text style={{ marginBottom: '15px', fontSize: '18px', fontWeight: 'bold' }}>Search by Taste</Text>
            <Input
              placeholder="Enter Taste"
              value={taste}
              onChange={(e) => setTaste(e.target.value)}
              className="w-full p-4 rounded-xl text-lg"
            />
          </div>
          <div className="flex flex-col w-full">
            <Text style={{ marginBottom: '15px', fontSize: '18px', fontWeight: 'bold' }}>Search by SMILE</Text>
            <Input
              placeholder="Enter SMILE"
              value={smile}
              onChange={(e) => setSmile(e.target.value)}
              className="w-full p-4 rounded-xl text-lg"
            />
          </div>
        </Flex>
        <Button
          onClick={handleSearch}
          className="bg-[#3B82F6] text-white py-4 px-8 rounded hover:bg-blue-500"
          style={{ fontSize: '25px', marginTop: '20px', marginBottom: '50px', width: '150px', padding: '20px' }}
        >
          Search
        </Button>
      </Flex>
    </div>
  );
};

export default UmamiDB;
