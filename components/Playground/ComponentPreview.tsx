import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { DottedBackground } from "../GeneralComponents/DottedBackground";

export const ComponentPreview = ({ code }: { code: string }) => {
  return (
    <LiveProvider code={code}>
      <div className="w-[48vw] h-full bg-white p-4 overflow-auto flex items-center justify-center animate-in fade-in duration-300">
        <LivePreview />
        <LiveError />
        {/* <DottedBackground /> */}
      </div>
    </LiveProvider>
  );
};
