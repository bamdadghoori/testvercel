import React, { useState } from "react";
import { useRouter } from "next/router";
import ProgressLoading from "../../progressLoadingPanel";
const Table = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const goToPage = async (title: string) => {
    setLoading(true);
    await router.push(title);
  };

  return (
    <>
      {loading && <ProgressLoading />}
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <h6 className="dark:text-white">Resumes table</h6>
            </div>
            <div className="flex-auto px-0 pt-0 pb-2">
              <div className="p-0 overflow-x-auto">
                <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
User 
                      </th>
                      <th className="px-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                 Pdf Url
                      </th>
                    
                      <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Email/phone
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img
                              src="/assets/imgs/team-2.jpg"
                              className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                              alt="user1"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              John Michael
                            </h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                              john@creative-tim.comautho
                            </p>
                          </div>
                        </div>
                      </td>
                  
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <a
                            className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400 cursor-pointer"
                           
                          >
                           Link
                          </a>
                      </td>
                      <td
                        colSpan={2}
                        className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent"
                      >
                        <div className="flex justify-around gap-4">
                        <span
                            className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400 "
                           
                          >
                           fdsafdsf
                          </span>
                       
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img
                              src="/assets/imgs/team-3.jpg"
                              className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                              alt="user2"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              Alexa Liras
                            </h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                              alexa@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                 
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <a
                            className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400 cursor-pointer"
                           
                          >
                           Link
                          </a>
                      </td>
                      <td
                        colSpan={2}
                        className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent"
                      >
                        <div className="flex justify-around gap-4">
                          <span
                            className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400 "
                           
                          >
                           fdsafdsf
                          </span>
                       
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img
                              src="/assets/imgs/team-4.jpg"
                              className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                              alt="user3"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              Laurent Perrier
                            </h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                              laurent@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                  
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <a
                            className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400 cursor-pointer"
                           
                          >
                           Link
                          </a>
                      </td>
                      <td
                        colSpan={2}
                        className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent"
                      >
                        <div className="flex justify-around gap-4">
                          <span
                            className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400 "
                           
                          >
                           fdsafdsf
                          </span>
                       
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img
                              src="/assets/imgs/team-3.jpg"
                              className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                              alt="user4"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              Michael Levi
                            </h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                              michael@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                     
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <a
                            className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400 cursor-pointer"
                           
                          >
                           Link
                          </a>
                      </td>
                      <td
                        colSpan={2}
                        className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent"
                      >
                        <div className="flex justify-around gap-4">
                          <span
                            className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400 "
                           
                          >
                           fdsafdsf
                          </span>
                        
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img
                              src="/assets/imgs/team-2.jpg"
                              className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                              alt="user5"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              Richard Gran
                            </h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                              richard@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                 
                      <td className="p-2 text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <a
                            className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400 cursor-pointer"
                           
                          >
                           Link
                          </a>
                      </td>
                      <td
                        colSpan={2}
                        className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent"
                      >
                        <div className="flex justify-around gap-4">
                        <span
                            className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400 "
                           
                          >
                           fdsafdsf
                          </span>
                          
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                        <div className="flex px-2 py-1">
                          <div>
                            <img
                              src="/assets/imgs/team-4.jpg"
                              className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl"
                              alt="user6"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              Miriam Eric
                            </h6>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">
                              miriam@creative-tim.com
                            </p>
                          </div>
                        </div>
                      </td>
                     
                      <td className="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                      <a
                            className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400 cursor-pointer"
                           
                          >
                           Link
                          </a>
                      </td>

                      <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                        <div className="flex justify-around gap-4">
                            <span
                            className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400 "
                           
                          >
                           fdsafdsf
                          </span>
                        
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Table;
