import { useModal } from "@/context/modal-context";
import { cn } from "@/lib/utils";

/* eslint-disable react/prop-types */
const Modal = ({ width, height, children, data }) => {
  const { isModalOpen } = useModal();
  if (!isModalOpen) return null;

  return (
    <>
      <div className="w-full flex  top-0 bottom-0 bg-[rgba(0,0,0,0.9)] z-50 fixed h-screen items-center justify-center">
        <div
          className={cn(
            `container ${
              width ? `w-[90%] md:w-[${width}]` : "w-[90%] md:w-[1000px]"
            } mx-auto ${
              height ? `h-full md:h-[${height}]` : "h-full md:h-[400px]"
            } items-center flex flex-col justify-center`
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
