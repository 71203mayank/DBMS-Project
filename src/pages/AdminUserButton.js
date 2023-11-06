import React from 'react';
import { useCallback } from 'react';

const AdminButton = () => {
  const onFrameContainer2Click = useCallback(() => {
    // Please sync "admin page" to the project
  }, []);

  return (
    <div>
        <div className="absolute top-[107.69px] left-[23.08px] overflow-y-auto flex flex-row items-start justify-start text-white">
          <div className="cursor-pointer rounded-[15.38px] bg-royalblue shadow-[0px_7.6923065185546875px_7.69px_rgba(52,_106,_255,_0.15)] w-[234.62px] flex flex-col items-center justify-start py-[11.538459777832031px] px-[30.76922607421875px] box-border">
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[23.08px] font-semibold [text-shadow:0px_3.8461532592773438px_3.85px_rgba(0,_0,_0,_0.25)]">
                ADMIN MODE
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute top-[165.38px] left-[24.04px] flex flex-row items-start justify-start cursor-pointer text-white"
          onClick={onFrameContainer2Click}
        >
          <div className="  hover:bg-royalblue rounded-[15.38px] bg-cornflowerblue shadow-[0px_7.6923065185546875px_7.69px_rgba(52,_106,_255,_0.15)] w-[234.62px] flex flex-col items-center justify-start py-[11.538459777832031px] px-[30.76922607421875px] box-border">
            <div className="flex flex-row items-center justify-start hover:bg-darkblue">
              <div className="relative leading-[23.08px] font-semibold [text-shadow:0px_3.8461532592773438px_3.85px_rgba(0,_0,_0,_0.25)]">
                USER MODE
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default AdminButton;
