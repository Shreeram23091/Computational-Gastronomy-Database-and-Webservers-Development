import { Button, Flex, Text, Input } from "@sparrowengg/twigs-react";
import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [sequence, setSequence] = useState("");
  const [taste, setTaste] = useState("");
  const [smile, setSmile] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // Track if search has been made

  const handleSearch = async () => {
    setHasSearched(true); // Set to true once search button is clicked

    try {
      // Construct query string based on available inputs
      const params = new URLSearchParams();
      if (sequence) params.append("sequence", sequence);
      if (taste) params.append("taste", parseInt(taste));
      if (smile) params.append("smile", smile);

      const response = await axios.get(
        `http://127.0.0.1:8000/api/molecules/search`,
        {
          params: params,
        }
      );

      setResults(response.data);
    } catch (error) {
      console.error("There was an error searching!", error);
    }
  };

  return (
    <>
      <div id="home" className="flex flex-col custom-bg">
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <h1 className="text-white text-[128px]">UMAMI-DB</h1>
        </div>
        <div className="z-10 bg-blue-300 flex flex-col">
          <Flex className="w-full flex-col items-center">
            <Flex className="w-full flex-col md:flex-row justify-between items-center">
              <Flex
                id="about"
                className="flex-1 h-auto items-center justify-center ml-10 mr-10"
              >
                <p
                  style={{
                    padding: 30,
                    fontSize: 18,
                    marginTop: 100,
                    marginBottom: 100,
                    fontFamily: "sans-serif",
                    fontWeight: 200,
                    textAlign: "justify",
                  }}
                >
                  Sweetness is the most crucial sensory attribute of compounds
                  that add calories and nutritional value to the food. Sweet
                  amalgams are highly employed throughout the food industry and
                  have a significant impact on human health. Over-consumption of
                  these sweeteners can lead to lifestyle disorders such as
                  type-2 diabetes, heart disease, and other obesity-related
                  diseases. Hence, building computational model to predict the
                  sweetness value of the compounds towards discovering compounds
                  that are healthier is of foremost importance. The model works
                  by assimilation of features chemical generated from Mordred
                  and Padel. Gradient Boost and Random Forest Regressor
                  outperform other models with correlation coefficient and root
                  mean square error of 0.94, 0.23 and 0.92, 0.28, respectively.
                </p>
              </Flex>
              <Flex
                justifyContent="center"
                className="flex flex-col"
                style={{
                  padding: 30,
                  fontSize: 18,
                  marginTop: 100,
                  marginBottom: 100,
                }}
              >
                <Flex className="mb-4 flex flex-col">
                  <a
                    href="/predict"
                    className="text-white text-2xl font-semibold"
                  >
                    Predict
                  </a>
                  <Text style={{ fontFamily: "sans-serif", fontWeight: 200 }}>
                    Section for predicting smile value
                  </Text>
                </Flex>
                <Flex className="mb-4 flex flex-col">
                  <a
                    href="/predict"
                    className="text-white text-2xl font-semibold"
                  >
                    How to use
                  </a>
                  <Text style={{ fontFamily: "sans-serif", fontWeight: 200 }}>
                    Section explaining our methodology
                  </Text>
                </Flex>
              </Flex>
              <Flex
                justifyContent="center"
                className="flex flex-col"
                style={{
                  padding: 30,
                  fontSize: 18,
                  marginTop: 100,
                  marginBottom: 100,
                }}
              >
                <Flex className="mb-4 flex flex-col">
                  <a
                    href="/search"
                    className="text-white text-2xl font-semibold"
                  >
                    Umami-DB
                  </a>
                  <Text style={{ fontFamily: "sans-serif", fontWeight: 200 }}>
                    Placeholder to put github repository
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <div className="text-3xl text-white font-semibold">
              Search
            </div>

            {/* Search Section */}
            <Flex className="w-full max-w-4xl flex-col md:flex-row justify-between items-center mt-8 px-4">
              <div className="flex-1 flex flex-col items-center px-4">
                <Text className="mb-2 text-xl font-bold text-white">
                  Search by Sequence
                </Text>
                <Input
                  placeholder="Enter Sequence"
                  value={sequence}
                  onChange={(e) => setSequence(e.target.value)}
                  className="w-full p-4 rounded-xl text-lg"
                />
              </div>
              <div className="flex-1 flex flex-col items-center px-4 mt-4 md:mt-0">
                <Text className="mb-2 text-xl font-bold text-white">
                  Search by Taste
                </Text>
                <Input
                  placeholder="Enter Taste"
                  value={taste}
                  onChange={(e) => setTaste(e.target.value)}
                  className="w-full p-4 rounded-xl text-lg"
                />
              </div>
              <div className="flex-1 flex flex-col items-center px-4 mt-4 md:mt-0">
                <Text className="mb-2 text-xl font-bold text-white">
                  Search by SMILE
                </Text>
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
              className="bg-white mb-10 text-blue-500 py-4 px-8 rounded hover:bg-blue-100 mt-8"
              style={{ fontSize: "20px" }}
            >
              Search
            </Button>

            {/* Display search results */}
            {hasSearched && (
              <div className="w-full max-w-4xl mb-8 bg-white p-4 rounded-xl mt-8">
                {results.length > 0 ? (
                  // <ul>
                  //   {results.map((result, index) => (
                  //     <li key={index} className="text-black">
                  //       <p>
                  //         <strong>Sequence:</strong> {result.SEQUENCE}
                  //       </p>
                  //       <p>
                  //         <strong>Taste:</strong> {result.TASTE}
                  //       </p>
                  //       <p>
                  //         <strong>SMILES:</strong> {result.Std_SMILES}
                  //       </p>
                  //       <hr className="my-4" />
                  //     </li>
                  //   ))}
                  // </ul>
                  <table className="table-auto w-full text-left">
                    <thead>
                      <tr>
                        <th className="px-4 py-2">Sequence</th>
                        <th className="px-4 py-2">Taste</th>
                        <th className="px-4 py-2">SMILES</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((result, index) => (
                        <tr key={index}>
                          <td className="border px-4 py-2">
                            {result.SEQUENCE}
                          </td>
                          <td className="border px-4 py-2">{result.TASTE}</td>
                          <td className="border flex flex-wrap break-all px-4 py-2">
                            {result.Std_SMILES}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <Text className="text-black">No results found</Text>
                )}
              </div>
            )}
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Home;
