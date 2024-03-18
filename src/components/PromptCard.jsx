import { IoMdArrowUp } from "react-icons/io";
import PropTypes from 'prop-types';


const PromptCard = ({title, subTitle}) => {
  return (
    <>
      <div className="group border border-stone-300 p-3 rounded-lg flex items-center gap-x-6 justify-between cursor-pointer transition-all duration-300 ease-in-out hover:bg-stone-100">
        <div>
          <p className="text-black text-sm font-medium">
            {title}
          </p>
          <span className="text-stone-500 text-sm">
            {subTitle}
          </span>
        </div>
        {/* Icon */}
        <span className="bg-white p-1 rounded-lg transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
          <IoMdArrowUp />
        </span>
      </div>
    </>
  );
};
PromptCard.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}
export default PromptCard;
