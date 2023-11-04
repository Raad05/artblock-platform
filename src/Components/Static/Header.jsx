import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between bg-black p-5">
      <div className="flex gap-4 items-center">
        <button
          className=" bg-slate-600 text-white p-2 rounded"
          onClick={() => navigate("/view-communities")}
        >
          View Communities
        </button>
        <button
          className=" bg-slate-600 text-white p-2 rounded"
          onClick={() => navigate("/create-community")}
        >
          Create Community
        </button>
        <button
          className=" bg-slate-600 text-white p-2 rounded"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Buy ABX
        </button>
        <ConnectButton></ConnectButton>
      </div>
      <form>
        <dialog id="my_modal_1" className="modal text-center">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-2">Enter Amount</h3>
            <input
              type="text"
              className="p-2 rounded text-center"
              placeholder="ABX amount"
            />
            <div className="flex justify-center">
              <button className="bg-blue-600 px-10 py-2 rounded mt-5">
                Buy
              </button>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </form>
      <form action="/search" method="get">
        <input type="search" className="p-2 rounded" placeholder="Search..." />
        <button
          type="submit"
          className="bg-blue-600 rounded mx-5 p-2 text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
