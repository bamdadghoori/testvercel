import React from "react";

const PaginationButtons = ({
  paginationButtons,
  currentPage,
  changePage,
  goToPrevPage,
  goToNextPage,
  adminStyle,
}: {
  paginationButtons: number[];
  currentPage: number;
  changePage: (...args: any[]) => void;
  goToPrevPage: (...args: any[]) => void;
  goToNextPage: (...args: any[]) => void;
  adminStyle:boolean
}) => {
  return (
    <>
      <div className={` w-full flex justify-center`}>
        <div className={`flex  justify-center pagination-buttons ${adminStyle ? 'shadow-md':'pagination-button-shadow'}`}>
          <button
            className={`${adminStyle==false ? 'bg-color-550':'bg-[#344767]'} p-2 text-[#fff] flex items-center justify-content prev-button`}
            onClick={() => goToPrevPage(currentPage)}
          >
            <img
              src="/assets/imgs/icons/left-arrow-svgrepo-com.svg"
              className="prev-img"
            />
          </button>

          {paginationButtons.map((el: any, i: number) => {
            return (
              <button
                className={`${
                  el == currentPage ? `${adminStyle==false ? 'bg-color-300' :'bg-[#5E72E4]'}` : `${adminStyle==false ? 'bg-color-550' :'bg-[#344767]'} `
                } md:visible invisible  p-2 px-4 text-[#fff] flex items-center justify-content`}
                onClick={() => changePage(el)}
              >
                {el}
              </button>
            );
          })}
          <button
            className={`${adminStyle==false ? 'bg-color-550':'bg-[#344767]'} p-2 text-[#fff] flex items-center justify-content next-button`}
            onClick={() => goToNextPage(currentPage)}
          >
            <img
              src="/assets/imgs/icons/left-arrow-svgrepo-com.svg"
              className="next-img"
            />
          </button>
        </div>
      </div>
    </>
  );
};
export default PaginationButtons;
