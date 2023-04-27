import Image from "next/image";
import { getCurrentUser } from "../utils/data";

const { name, email, bio, avatar } = getCurrentUser();

const TopContent = () => {
  return (
    <div>
      <img
        src={avatar}
        alt={"avatar"}
        height="145"
        width="145"
        className="mx-auto rounded-full mt-20"
      />
      <h1 className="text-center barge h1">{name}</h1>
    </div>
  );
};

export default TopContent;