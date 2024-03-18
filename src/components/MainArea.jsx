import Version from "./Version";
import Help from "./Help";
import PromptCard from "./PromptCard";
import InputBox from "./InputBox";

const MainArea = () => {
  return (
    <>
      <main className="bg-white w-full h-full flex flex-col">
        {/* Version */}
        <div className="fixed top-0 pl-3">
          <Version />
        </div>
        {/* Help */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <Help />
        </div>
     
        <div className="px-3 lg:max-w-3xl lg:mx-auto">
          {/* Demo Prompt */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
            {/* Prompt 1 */}
            <PromptCard
              title="Suggest fun activities"
              subTitle="to help me make friends in a new city"
            />

            {/* Prompt 2 */}
            <PromptCard
              title="Recommend a dish"
              subTitle="to bring to a potluck"
            />

            {/* Prompt 3 */}
            <PromptCard
              title="Show me a code snippet"
              subTitle="of a website's sticky header"
            />

            {/* Prompt 4 */}
            <PromptCard
              title="Write a thank-you note"
              subTitle="to my interviewer"
            />
          </div>

          {/* User Input Area */}
          <div className="mt-8">
            <InputBox />
          </div>

          {/* condition */}
          <div className="text-center my-2">
            <p className="text-sm text-stone-400">
              YourGPT can make mistakes. Consider checking important
              information.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainArea;
