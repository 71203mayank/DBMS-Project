import React from 'react';
import { useCallback } from 'react';

function SearchAdmin() {
    const onHomeContainer5Click = useCallback(() => {
        // Please sync "admin mode - search for train tickets" to the project
      }, []);
  return (
    <div>
      <div className="absolute top-[298.08px] left-[308.65px] rounded-[15.38px] bg-white w-[693.27px] h-[164.42px] text-dimgray">
        <div className="absolute top-[23.08px] right-[15.38px] w-[23.08px] h-[23.08px]" />
        <div className="absolute h-[34.5%] top-[12.87%] bottom-[52.63%] left-[35.58px] rounded-[15.38px] bg-ghostwhite w-[625.35px] flex flex-row items-center justify-start py-[11.538459777832031px] px-[15.384613037109375px] box-border">
          <div className="relative leading-[23.08px] font-semibold">
            Enter travel route..
          </div>
        </div>
        <div className="absolute top-[91.35px] left-[calc(50%_-_296.28px)] w-[378.1px]" />
        <div
          className="hover:bg-royalblue absolute top-[98.08px] left-[38.46px] rounded-[15.38px] bg-cornflowerblue w-[625.35px] flex flex-row items-center justify-start py-[11.538459777832031px] px-[15.384613037109375px] box-border gap-[12.5px] cursor-pointer text-gray-100"
          onClick={onHomeContainer5Click}
        >
          <img
            className="relative w-[24.04px] h-[24.04px] overflow-hidden shrink-0"
            alt=""
            src="/ionsearchoutline.svg"
          />
          <div className="relative leading-[23.08px] font-semibold flex items-center w-[300.96px] shrink-0">{`Search for train tickets `}</div>
        </div>
      </div>
    </div>
  );
}

export default SearchAdmin;
