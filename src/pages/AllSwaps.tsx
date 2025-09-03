import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllSwaps = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // For now, redirect to browse page until we implement dedicated swaps view
    navigate("/browse");
  }, [navigate]);

  return null;
};

export default AllSwaps;