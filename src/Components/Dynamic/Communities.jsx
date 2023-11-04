import { useEffect, useState } from "react";
import { readContract } from "@wagmi/core";
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from "@wagmi/core";
import { useAccount } from "wagmi";
import communityABI from "../../../src/artifacts/communityABI.json";
import memberABI from "../../artifacts/memberABI.json";

const Communities = () => {
  const communityAddress = "0x2e74ee9757B7D438ffd1D693539d1e5EBE4D9e1F";
  const { address } = useAccount();

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await readContract({
      abi: communityABI,
      address: communityAddress,
      functionName: "getCommunities",
    });
    setResult(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const userContractAddress = "0x5Efd79aA5562b6C286806E2Ca5C0D677F050c02A";

  const joinCommunity = async (e) => {
    e.preventDefault();
    try {
      const { request } = await prepareWriteContract({
        abi: memberABI,
        address: userContractAddress,
        functionName: "joinCommunity",
        args: [],
        account: address,
      });

      const { hash } = await writeContract(request);
      await waitForTransaction({
        hash,
      });
      alert(`Transaction confirmed with hash ${hash}!`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3 className="text-xl my-5 text-center">Community List</h3>
      <div className="overflow-x-auto container mx-auto">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Description</th>
                <th>Token Name</th>
                <th>Token symbol</th>
                <th>Exchange Rate</th>
              </tr>
            </thead>
            <tbody>
              {result.map((community, idx) => (
                <tr key={idx}>
                  <button className="bg-green-600 p-2 text-white rounded">
                    Join Community
                  </button>
                  <td>{community.name}</td>
                  <td>{community.description}</td>
                  <td>{community.tokenName}</td>
                  <td>{community.tokenSymbol}</td>
                  <td>{community.exchangeRate.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Communities;
