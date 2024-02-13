import React from "react";
import { ClipLoader } from "react-spinners";
interface BtnProps extends React.HTMLAttributes<HTMLButtonElement> {
  click: () => void;
  loading: boolean;
}

const Btn: React.FC<BtnProps> = ({ click, loading, ...props }) => {
  return (
    <button {...props} disabled={loading} onClick={click}>
      {loading ? <ClipLoader color="#3498db" size={50} /> : "submit"}
    </button>
  );
};

export default Btn;
