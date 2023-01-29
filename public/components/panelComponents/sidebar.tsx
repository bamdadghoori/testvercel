import React, { useState } from "react";
import { useRouter } from "next/router";
import ProgressLoading from "../progressLoadingPanel";
//@ts-ignore
import { Scrollbars } from "react-custom-scrollbars";
import { stat } from "fs";

const Sidebar = ({
  changeSideBarVisibility,
  showSideBar,
}: {
  changeSideBarVisibility: (...args: any[]) => void;
  showSideBar: any;
}) => {
  const [loading, setLoading] = useState(false);

  //to determine which link is in dropdown state
  const [drStateBlog, setDrStateBlog] = useState(false);
  const [drStateUsers, setDrStateUsers] = useState(false);
  const [drStateAccounts, setDrStateAccounts] = useState(false);

  const router = useRouter();
  console.log(router.pathname);
  const [activePage, setActivePage] = useState(router.pathname);
  const [activeBlogPage, setActiveBlogPage] = useState(router.pathname);
  const PagesName = [
    { label: "Dashboard", value: "/panel", img: "monitor-dashboard-2.svg" },
    {
      label: "Blogs",
      value: "/panel/blogs-management",
      img: "blog-writing-icon.svg",
    },
    {
      label: "Contact messages",
      value: "/panel/contact-messages-management",
      img: "contact-icon.svg",
    },
    {
      label: "Comments",
      value: "/panel/comments-management",
      img: "comments-icon.svg",
    },
    {
      label: "Users",
      value: "/panel/users-management",
      img: "users-aside-icon.svg",
    },
    {
      label: "Accounts",
      value: "/panel/account-management",
      img: "account-management-icon.svg",
    },
  ];

  const pagesNameBlog = [
    {
      label: "Blogs list",
      value: "/panel/blogs-management",
      img: "blog-writing-icon.svg",
    },
    {
      label: "Add new blog",
      value: "/panel/add-blog",
      img: "contact-icon.svg",
    },
  ];

  const pagesNameUsers = [
    {
      label: "Users list",
      value: "/panel/users-management",
    },
    {
      label: "Add new user",
      value: "/panel/add-user",
    },
  ];

  const pagesNameAccounts = [
    {
      label: "Change Password",
      value: "/panel/change-password",
    },
    {
      label: "update Account information",
      value: "/panel/update-account",
    },
  ];

  const goTopage = async (title: string) => {
    setLoading(true);
    await router.push(title);
    setLoading(false);
  };

  const changeDrStateBlog = (state: boolean) => {
    setDrStateBlog(state);
  };

  const changeDrStateUsers = (state: boolean) => {
    setDrStateUsers(state);
  };

  const changeDrStateAccounts = (state: boolean) => {
    setDrStateAccounts(state);
  };

  const dropDownClick = (el: any) => {
    setActivePage(el.value);
    switch (el.label) {
      case "Blogs":
        changeDrStateBlog(!drStateBlog);
        break;
      case "Users":
        changeDrStateUsers(!drStateUsers);
        break;
        case "Accounts":
          changeDrStateAccounts(!drStateAccounts);
          break;

      default:
        goTopage(`${el.value}`);
        break;
    }

    setActivePage(el.value);
    // if (el.label != "Blogs" && el.label != "Users") {
    //   goTopage(`${el.value}`);
    // } else if(el.label==="Blogs"){
    //   changeDrStateBlog(!drStateBlog);
    // }
    // else if (el.label==="Users"){
    //   changeDrStateUsers(!drStateUsers);
    // }
  };

  return (
    <>
      {console.log(showSideBar)}
      {loading && <ProgressLoading />}
      <aside
        className={`${
          showSideBar ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 h-fit pb-4 flex-wrap items-center justify-between block w-full p-0 my-4 antialiased transition-transform duration-200  bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0`}
      >
        <div className="h-19">
          <i
            className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times dark:text-white text-slate-400 xl:hidden"
            onClick={() => changeSideBarVisibility(false)}
          ></i>
          <a
            className="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700"
            href="https://demos.creative-tim.com/argon-dashboard-tailwind/pages/dashboard.html"
            target="_blank"
          >
            <img
              src="/assets/imgs/logo-ct-dark.png"
              className="inline h-full max-w-full transition-all duration-200 dark:hidden ease-nav-brand max-h-8"
              alt="main_logo"
            />
            <img
              src="/assets/imgs/logo-ct.png"
              className="hidden h-full max-w-full transition-all duration-200 dark:inline ease-nav-brand max-h-8"
              alt="main_logo"
            />
            <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">
              Argon Dashboard 2
            </span>
          </a>
        </div>

        <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

        <div className="items-center scrollable-list block w-auto  grow basis-full">
          <Scrollbars
            style={{ height: "45vh" }}
            renderView={(props: any) => <div {...props} className="view" />}
            renderTrackVertical={(props: any) => (
              <div {...props} className="track-vertical" />
            )}
            renderThumbVertical={(props: any) => (
              <div {...props} className="thumb-vertical" />
            )}
          >
            <ul className="flex flex-col pl-0 mb-0">
              {PagesName.map((el: any, i: number) => {
                return (
                  <li key={i} className="w-full">
                    <a
                      className={`${
                        activePage == el.value
                          ? "bg-blue-500/13  text-slate-700 rounded font-semibold"
                          : " "
                      } relative flex dark:text-white dark:opacity-80 py-2\.5 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors cursor-pointer`}
                      onClick={(e) => {
                        e.preventDefault();
                        dropDownClick(el);
                      }}
                    >
                      <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                        <i className="relative top-0 text-sm icons-sidebar">
                          {" "}
                          <img src={`/assets/imgs/icons/${el.img}`} />
                        </i>
                      </div>
                      <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                        {el.label}
                      </span>
                      {el.label == "Blogs" && (
                        <i
                          className={`${
                            drStateBlog ? "rotate-90" : " "
                          } absolute right-2  ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-500`}
                          aria-hidden="true"
                        ></i>
                      )}

                      {el.label == "Users" && (
                        <i
                          className={`${
                            drStateUsers ? "rotate-90" : " "
                          } absolute right-2  ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-500`}
                          aria-hidden="true"
                        ></i>
                      )}

                      {el.label == "Accounts" && (
                        <i
                          className={`${
                            drStateAccounts ? "rotate-90" : " "
                          } absolute right-2  ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-500`}
                          aria-hidden="true"
                        ></i>
                      )}
                    </a>
                    {/* blogs drop down */}
                    <ul
                      className={`${
                        el.label == "Blogs" && drStateBlog == true
                          ? "h-full py-2.7"
                          : "opacity-0 h-0"
                      } ease-in-out bg-blue-500\/8 duration-300 transition-all   text-slate-700   relative  dark:text-white  text-sm ease-nav-brand my-0 mx-2  items-center whitespace-nowrap px-4  cursor-pointer`}
                    >
                      {pagesNameBlog.map((el: any) => {
                        return (
                          <li key={i} className=" mt-0.5 w-full">
                            <a
                              className={`${
                                el.value == activeBlogPage
                                  ? "bg-[#5E72E4] rounded text-white z-10"
                                  : " "
                              } hover:bg-[#5E72E4] hover:rounded hover:text-white  hover:z-10 dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors cursor-pointer`}
                              onClick={(e) => {
                                e.preventDefault();
                                setActiveBlogPage(el.value);
                                goTopage(`${el.value}`);
                              }}
                            >
                              {el.label}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                    {/* end of blogs dropdown */}

                    {/* users drop down */}
                    <ul
                      className={`${
                        el.label == "Users" && drStateUsers == true
                          ? "h-full  py-2.7"
                          : "opacity-0 h-0"
                      } -mt-0.5  ease-in-out bg-blue-500\/8 duration-300 transition-all   text-slate-700   relative  dark:text-white  text-sm ease-nav-brand my-0 mx-2  items-center whitespace-nowrap px-4  cursor-pointer`}
                    >
                      {pagesNameUsers.map((el: any) => {
                        return (
                          <li key={i} className=" mt-0.5 w-full">
                            <a
                              className={`${
                                el.value == activeBlogPage
                                  ? "bg-[#5E72E4] rounded text-white z-10"
                                  : " "
                              } hover:bg-[#5E72E4] hover:rounded hover:text-white  hover:z-10 dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors cursor-pointer`}
                              onClick={(e) => {
                                e.preventDefault();
                                setActiveBlogPage(el.value);
                                goTopage(`${el.value}`);
                              }}
                            >
                              {el.label}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                    {/* end of users dropdown */}

                    {/* accounts drop down */}
                    <ul
                      className={`${
                        el.label == "Accounts" && drStateAccounts== true
                          ? "h-full  py-2.7"
                          : "opacity-0 h-0"
                      } -mt-0.5  ease-in-out bg-blue-500\/8 duration-300 transition-all   text-slate-700   relative  dark:text-white  text-sm ease-nav-brand my-0 mx-2  items-center whitespace-nowrap px-4  cursor-pointer`}
                    >
                      {pagesNameAccounts.map((el: any) => {
                        return (
                          <li key={i} className=" mt-0.5 w-full">
                            <a
                              className={`${
                                el.value == activeBlogPage
                                  ? "bg-[#5E72E4] rounded text-white z-10"
                                  : " "
                              } hover:bg-[#5E72E4] hover:rounded hover:text-white  hover:z-10 dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors cursor-pointer`}
                              onClick={(e) => {
                                e.preventDefault();
                                setActiveBlogPage(el.value);
                                goTopage(`${el.value}`);
                              }}
                            >
                              {el.label}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                    {/* end of accounts dropdown */}

                  </li>
                );
              })}
            </ul>
          </Scrollbars>
        </div>

        <div className="mx-4">
          <p className="invisible hidden text-gray-800 text-red-500 text-red-600 text-blue-500 bg-gray-500/30 bg-cyan-500/30 bg-emerald-500/30 bg-orange-500/30 bg-red-500/30 after:bg-gradient-to-tl after:from-zinc-800 after:to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 after:from-blue-700 after:to-cyan-500 after:from-orange-500 after:to-yellow-500 after:from-green-600 after:to-lime-400 after:from-red-600 after:to-orange-600 after:from-slate-600 after:to-slate-300 text-emerald-500 text-cyan-500 text-slate-400"></p>
          <div
            className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border"
            sidenav-card
          >
            <img
              className="w-1/2 mx-auto"
              src="/assets/imgs/illustrations/icon-documentation.svg"
              alt="sidebar illustrations"
            />
            <div className="flex-auto w-full p-4 pt-0 text-center">
              <div className="transition-all duration-200 ease-nav-brand">
                <h6 className="mb-0 dark:text-white text-slate-700">
                  Need help?
                </h6>
                <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                  Please check our docs
                </p>
              </div>
            </div>
          </div>
          <a
            onClick={() => goTopage("/")}
            target="_blank"
            className="inline-block cursor-pointer w-full px-8 py-2 mb-4 text-xs font-bold leading-normal text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-slate-700 bg-150 hover:shadow-xs hover:-translate-y-px"
          >
            Browse our website
          </a>

          <a
            className="inline-block w-full px-8 py-2 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md select-none bg-150 bg-x-25 hover:shadow-xs hover:-translate-y-px"
            href="https://www.creative-tim.com/product/argon-dashboard-pro-tailwind?ref=sidebarfree"
            target="_blank"
          >
            Check google analytics
          </a>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
