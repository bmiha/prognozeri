import { LiaUserCircle } from "react-icons/lia";

export default function Page() {
  return (
    <div className="flex items-center gap-4 mb-8 mt-4">
      <LiaUserCircle size={44} />
      <div>
        <p className="text-xl">Miro Mirić</p>
        <div className="flex items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg"
            width="20"
          />
          <p>23.10.1994.</p>
        </div>
      </div>
    </div>
  );
}
