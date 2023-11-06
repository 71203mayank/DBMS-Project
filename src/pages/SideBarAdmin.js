import React from 'react';
import { useCallback } from 'react';

function SideBarAdmin() {
  const onAllTripsContainerClick = useCallback(() => {
    // Please sync "admin mode - Manage User" to the project
  }, []);
  const onTravelsContainerClick = useCallback(() => {
    // Please sync "admin mode - Register users" to the project
  }, []);
  const onRoomsContainerClick = useCallback(() => {
    // Please sync "admin mode -Booking history" to the project
  }, []);
  const onTransportContainerClick = useCallback(() => {
    // Please sync "admin mode - book tickets" to the project
  }, []);
  const onAttractionsContainerClick = useCallback(() => {
    // Please sync "admin mode - cancel tickets" to the project
  }, []);

  return (
    <div>
      <div className=" absolute top-[33.65px] left-[65.38px] w-[150.96px] h-[51.92px] text-[33.22px] ">
          <div className="absolute top-[0px] left-[0px] w-[150.96px] h-[52.88px] ">
            <b className="absolute top-[0.96px] left-[48.08px] leading-[49.83px]">
              RMS
            </b>
            <img
              className="absolute top-[7.69px] left-[0px] w-[32.69px] h-[36.54px] overflow-hidden"
              alt=""
              src="/fa6solidtraintram.svg"
            />
          </div>
        </div>
        <div className="  absolute top-[223.08px] left-[23.08px] w-[234.62px] h-[353.85px]">
          <div className=" cursor-pointer absolute h-[13.04%] top-[0%] bottom-[86.96%] left-[0px] rounded-[15.38px] hover:bg-cornflowerblue bg-gainsboro w-[234.62px] flex flex-row items-center justify-start py-[11.538459777832031px] px-[15.384613037109375px] box-border gap-[15.38px]">
            <img
              className="relative w-[23.08px] h-[23.08px] overflow-hidden shrink-0"
              alt=""
              src="/home-icon.svg"
            />
            <div className="relative leading-[23.08px] font-semibold">Home</div>
          </div>
          <div
            className=" hover:bg-cornflowerblue bg-white absolute h-[13.32%] top-[17.26%] bottom-[69.43%] left-[0px] rounded-[15.38px] w-[234.62px] flex flex-row items-center justify-start py-[11.538459777832031px] px-[15.384613037109375px] box-border gap-[15.38px] cursor-pointer"
            onClick={onAllTripsContainerClick}
          >
            <img
              className="relative w-[24.04px] h-[24.04px] overflow-hidden shrink-0"
              alt=""
              src="/materialsymbolsmanageaccounts.svg"
            />
            <div className="relative leading-[23.08px] font-semibold">
              Manage users
            </div>
          </div>
          <div
            className=" hover:bg-cornflowerblue bg-white absolute h-[13.3%] top-[34.65%] bottom-[52.04%] left-[0px] rounded-[15.38px] w-[234.62px] flex flex-row items-center justify-start py-[11.538459777832031px] px-[15.384613037109375px] box-border gap-[15.38px] cursor-pointer"
            onClick={onTravelsContainerClick}
          >
            <img
              className="relative w-[23.08px] h-[23.08px] overflow-hidden shrink-0"
              alt=""
              src="/travels-icon.svg"
            />
            <div className="relative leading-[23.08px] font-semibold">
              Register Users
            </div>
          </div>
          <div
            className=" hover:bg-cornflowerblue bg-white absolute h-[19.57%] top-[48.91%] bottom-[31.52%] left-[0px] rounded-[15.38px] w-[234.62px] flex flex-row items-center justify-start py-[11.538459777832031px] px-[15.384613037109375px] box-border gap-[15.38px] cursor-pointer"
            onClick={onRoomsContainerClick}
          >
            <img
              className="relative w-[24.04px] h-[24.04px] overflow-hidden shrink-0"
              alt=""
              src="/icoutlinehistory.svg"
            />
            <div className="relative leading-[23.08px] font-semibold">
              <p className="m-0">{`View User `}</p>
              <p className="m-0">Booking History</p>
            </div>
          </div>
          <div
            className=" hover:bg-cornflowerblue bg-white absolute h-[13.32%] top-[69.43%] bottom-[17.26%] left-[0px] rounded-[15.38px] w-[234.62px] flex flex-row items-center justify-start py-[11.538459777832031px] px-[15.384613037109375px] box-border gap-[15.38px] cursor-pointer"
            onClick={onTransportContainerClick}
          >
            <img
              className="relative w-[24.04px] h-[24.04px] overflow-hidden shrink-0"
              alt=""
              src="/materialsymbolslightbookoutline.svg"
            />
            <div className="relative leading-[23.08px] font-semibold">
              Book Tickets
            </div>
          </div>
          <div
            className=" hover:bg-cornflowerblue bg-white absolute h-[13.32%] top-[86.82%] bottom-[-0.14%] left-[0px] rounded-[15.38px] w-[234.62px] flex flex-row items-center justify-start py-[11.538459777832031px] px-[15.384613037109375px] box-border gap-[15.38px] cursor-pointer"
            onClick={onAttractionsContainerClick}
          >
            <img
              className="relative w-[24.04px] h-[24.04px] overflow-hidden shrink-0"
              alt=""
              src="/icons8cancel2.svg"
            />
            <div className="relative leading-[23.08px] font-semibold">
              Cancel Tickets
            </div>
          </div>
        </div>
       
    </div>
  );
}

export default SideBarAdmin;
