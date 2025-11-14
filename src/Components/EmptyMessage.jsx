import { HiOutlineEmojiSad } from "react-icons/hi";

const EmptyMessage = ({ message }) => {
  return (
    <div className="flex justify-center p-4 items-center flex-col fixed top-1/2 left-1/2 -translate-1/2">
      <HiOutlineEmojiSad className="w-8 h-8 text-error " />
      <p className="font-Body font-medium text-lg text-center text-black">
        {message}
      </p>
    </div>
  );
};

export default EmptyMessage;
