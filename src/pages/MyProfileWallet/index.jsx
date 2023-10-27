import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const userTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MyProfileWalletPage = () => {
  const navigate = useNavigate();

  const [searchinputvalue, setSearchinputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[302px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="bg-gray-50 border-gray-100 border-r-[1.5px] border-solid flex flex-col gap-[50px] items-start justify-start p-[18px] w-full">
            <div className="flex flex-row gap-3.5 items-start justify-start ml-4 md:ml-[0] mt-4 w-[67%] md:w-full">
              <Img
                className="h-14 md:h-auto rounded-[50%] w-14"
                src="images/img_ellipse1015.png"
                alt="Ellipse1015"
              />
              <div className="flex flex-col gap-1.5 items-start justify-start mt-1">
                <Text
                  className="text-black-900 text-lg tracking-[0.18px]"
                  size="txtOutfitSemiBold18"
                >
                  Kevin Cranel
                </Text>
                <Text
                  className="text-gray-500 text-sm tracking-[0.14px]"
                  size="txtOutfitRegular14"
                >
                  @kecrane
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-urbanist gap-[30px] items-center justify-start w-full">
              <div className="flex flex-col gap-4 justify-start w-full">
                <Text
                  className="ml-4 md:ml-[0] text-gray-901 text-xs tracking-[0.12px]"
                  size="txtUrbanistMedium12Gray901"
                >
                  GENERAL
                </Text>
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                    onClick={() => navigate("/")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-[54%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_clock_1.svg"
                        alt="clock"
                      />
                      <Text
                        className="text-gray-500 text-lg tracking-[0.18px]"
                        size="txtUrbanistMedium18"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                    onClick={() => navigate("/message")}
                  >
                    <div className="flex flex-row gap-[18px] items-end justify-start ml-1.5 md:ml-[0] w-[47%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_car.svg"
                        alt="car"
                      />
                      <Text
                        className="mt-[5px] text-gray-500 text-lg tracking-[0.18px]"
                        size="txtUrbanistMedium18"
                      >
                        Message
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                    onClick={() => navigate("/settings")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-[45%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                      <Text
                        className="text-gray-500 text-lg tracking-[0.18px]"
                        size="txtUrbanistMedium18"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-start w-full">
                <Text
                  className="ml-4 md:ml-[0] text-gray-901 text-xs tracking-[0.12px]"
                  size="txtUrbanistMedium12Gray901"
                >
                  MARKETPLACE
                </Text>
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                    onClick={() => navigate("/market")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-[41%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Text
                        className="text-gray-500 text-lg tracking-[0.18px]"
                        size="txtUrbanistMedium18"
                      >
                        Market
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                    onClick={() => navigate("/activebid")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-1/2 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_judge.svg"
                        alt="judge"
                      />
                      <Text
                        className="text-gray-500 text-lg tracking-[0.18px]"
                        size="txtUrbanistMedium18"
                      >
                        Active Bid
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                    onClick={() => navigate("/saved")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-[39%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_clock.svg"
                        alt="clock One"
                      />
                      <Text
                        className="text-gray-500 text-lg tracking-[0.18px]"
                        size="txtUrbanistMedium18"
                      >
                        Saved
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-start w-full">
                <Text
                  className="ml-4 md:ml-[0] text-gray-901 text-xs tracking-[0.12px]"
                  size="txtUrbanistMedium12Gray901"
                >
                  MY PROFILE
                </Text>
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                    onClick={() => navigate("/myprofilecollection")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-1/2 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user_24X24.svg"
                        alt="user One"
                      />
                      <Text
                        className="text-gray-500 text-lg tracking-[0.18px]"
                        size="txtUrbanistMedium18"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-900_5f flex flex-col font-outfit items-start justify-start p-2.5 rounded-[10px] w-full">
                    <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-[39%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_calculator.svg"
                        alt="calculator"
                      />
                      <Text
                        className="text-gray-900 text-lg tracking-[0.18px]"
                        size="txtOutfitMedium18"
                      >
                        Wallet
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col font-urbanist items-start justify-start p-2.5 w-full"
                    onClick={() => navigate("/myprofilehistory")}
                  >
                    <div className="flex flex-row gap-[18px] items-end justify-start ml-1.5 md:ml-[0] w-2/5 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_clock_24X24.svg"
                        alt="clock Two"
                      />
                      <Text
                        className="mt-[5px] text-gray-500 text-lg tracking-[0.18px]"
                        size="txtUrbanistMedium18"
                      >
                        History
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-urbanist h-[258px] md:h-[263px] mb-[17px] ml-4 md:ml-[0] relative w-[88%]">
              <div className="absolute bg-gray-900 bottom-[0] h-[233px] inset-x-[0] mx-auto rounded-[15px] w-[234px]"></div>
              <div className="absolute flex flex-col gap-3.5 inset-x-[0] items-center justify-start mx-auto top-[0] w-[91%]">
                <Button
                  className="flex h-[50px] items-center justify-center shadow-bs w-[50px]"
                  shape="circle"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_question.svg"
                    alt="question"
                  />
                </Button>
                <Text
                  className="text-lg text-white-A700 tracking-[0.18px]"
                  size="txtUrbanistSemiBold18"
                >
                  Help Center
                </Text>
                <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                  <Text
                    className="leading-[180.00%] text-center text-gray-400 text-sm tracking-[0.14px]"
                    size="txtUrbanistRegular14"
                  >
                    <>
                      Having trouble in Enefti?
                      <br />
                      Please contact us for more question
                    </>
                  </Text>
                  <Button
                    className="cursor-pointer font-medium min-w-[206px] text-center text-sm tracking-[0.14px]"
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  >
                    Go To Help Center
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
        <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between outline outline-gray-100 p-[34px] sm:px-5 w-full">
            <Input
              name="SearchInput"
              placeholder="Search items, collections, and users"
              value={searchinputvalue}
              onChange={(e) => setSearchinputvalue(e)}
              className="!placeholder:text-gray-500 !text-gray-500 p-0 text-left text-sm tracking-[0.14px] w-full"
              wrapClassName="border border-gray-300 border-solid flex md:flex-1 md:mt-0 my-0.5 md:w-full"
              prefix={
                <Img
                  className="cursor-pointer h-6 my-3.5 mx-4"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#93989a"
                  className="cursor-pointer h-6 my-auto"
                  onClick={() => setSearchinputvalue("")}
                  style={{
                    visibility:
                      searchinputvalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={24}
                  width={24}
                  viewBox="0 0 24 24"
                />
              }
              shape="round"
              size="md"
            ></Input>
            <div className="flex flex-row font-urbanist gap-[30px] items-center justify-center md:mt-0 my-0.5">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[137px]"
                leftIcon={
                  <Img
                    className="h-6 ml-4 mr-2.5 my-3.5"
                    src="images/img_sort.svg"
                    alt="sort"
                  />
                }
                shape="round"
                color="gray_100"
                size="xl"
                variant="outline"
              >
                <div className="font-medium text-base text-left tracking-[0.16px]">
                  3,421 ETH
                </div>
              </Button>
              <Button
                className="flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                shape="circle"
                color="gray_100"
                size="lg"
                variant="outline"
              >
                <Img className="h-6" src="images/img_lock.svg" alt="lock" />
              </Button>
              <SelectBox
                className="w-[27%] sm:w-full"
                indicator={
                  <Img
                    className="h-6 mr-[0] w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="user Two"
                isSearchable={false}
                options={userTwoOptionsList}
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-urbanist gap-[34px] items-center justify-between w-[98%] md:w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start w-[68%] md:w-full">
              <Text
                className="sm:text-3xl md:text-[32px] text-[34px] text-black-900 tracking-[0.34px]"
                size="txtUrbanistSemiBold34"
              >
                Wallet
              </Text>
              <List
                className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start outline outline-[0.75px] outline-gray-100 p-6 sm:px-5 rounded-[15px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-[13px] items-start justify-start w-[91%] md:w-full">
                    <Button
                      className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                      shape="circle"
                      color="gray_50"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_frame162465.png"
                        alt="Frame162465"
                      />
                    </Button>
                    <div className="flex flex-col gap-1.5 items-start justify-end pt-2 w-full">
                      <div className="flex flex-col gap-[13px] items-center justify-start">
                        <Text
                          className="text-gray-500 text-lg tracking-[0.18px]"
                          size="txtUrbanistRegular18"
                        >
                          Total Spending
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtUrbanistSemiBold24"
                        >
                          $432,215.32
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-start justify-between py-[3px] w-full">
                        <div className="flex flex-row gap-1.5 items-start justify-start">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_cursor.svg"
                            alt="cursor"
                          />
                          <Text
                            className="text-green-600 text-sm tracking-[0.14px]"
                            size="txtUrbanistRegular14Green600"
                          >
                            +2.4%
                          </Text>
                        </div>
                        <div className="bg-gray-500 h-1 my-[7px] rounded-[50%] w-1"></div>
                        <Text
                          className="mt-[3px] text-gray-500 text-sm tracking-[0.14px]"
                          size="txtUrbanistRegular14Gray500"
                        >
                          May 17, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start outline outline-[0.75px] outline-gray-100 p-6 sm:px-5 rounded-[15px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-[13px] items-start justify-start w-[89%] md:w-full">
                    <Button
                      className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                      shape="circle"
                      color="gray_50"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_frame162465_gray_900.png"
                        alt="Frame162465 One"
                      />
                    </Button>
                    <div className="flex flex-col gap-1.5 items-start justify-end pt-1.5 w-full">
                      <div className="flex flex-col gap-[15px] items-start justify-start">
                        <Text
                          className="text-gray-500 text-lg tracking-[0.18px]"
                          size="txtUrbanistRegular18"
                        >
                          Total Income
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtUrbanistSemiBold24"
                        >
                          $21,579.22
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-start justify-between py-[3px] w-full">
                        <div className="flex flex-row gap-1.5 items-start justify-start">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_trendingup.svg"
                            alt="trendingup"
                          />
                          <Text
                            className="text-red-600 text-sm tracking-[0.14px]"
                            size="txtUrbanistRegular14Red600"
                          >
                            -2.32
                          </Text>
                        </div>
                        <div className="bg-gray-500 h-1 my-[7px] rounded-[50%] w-1"></div>
                        <Text
                          className="mt-[3px] text-gray-500 text-sm tracking-[0.14px]"
                          size="txtUrbanistRegular14Gray500"
                        >
                          May 17, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start outline outline-[0.75px] outline-gray-100 p-[23px] sm:px-5 rounded-[15px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-[13px] items-start justify-start mb-0.5 w-[90%] md:w-full">
                    <Button
                      className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                      shape="circle"
                      color="gray_50"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_frame162465_gray_900_42X42.png"
                        alt="Frame162465 Two"
                      />
                    </Button>
                    <div className="flex flex-col gap-1.5 items-start justify-end pt-2 w-full">
                      <div className="flex flex-col gap-[13px] items-start justify-start">
                        <Text
                          className="text-gray-500 text-lg tracking-[0.18px]"
                          size="txtUrbanistRegular18"
                        >
                          Total Saving
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtUrbanistSemiBold24"
                        >
                          $68,483.16
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-start justify-between py-[3px] w-full">
                        <div className="flex flex-row gap-1.5 items-start justify-start">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_cursor.svg"
                            alt="cursor One"
                          />
                          <Text
                            className="text-green-600 text-sm tracking-[0.14px]"
                            size="txtUrbanistRegular14Green600"
                          >
                            +2.4%
                          </Text>
                        </div>
                        <div className="bg-gray-500 h-1 my-[7px] rounded-[50%] w-1"></div>
                        <Text
                          className="mt-[3px] text-gray-500 text-sm tracking-[0.14px]"
                          size="txtUrbanistRegular14Gray500"
                        >
                          May 17, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.24px]"
                    size="txtOutfitSemiBold24"
                  >
                    Recent Activity
                  </Text>
                  <Text
                    className="text-gray-900 text-sm tracking-[0.14px]"
                    size="txtUrbanistMedium14Gray900"
                  >
                    View All
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[0.75px] outline-gray-100 py-6 rounded-[15px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[94%] md:w-full">
                        <Text
                          className="md:mt-0 mt-0.5 text-gray-500 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Gray500"
                        >
                          Item List
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[188px] text-gray-500 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Gray500"
                        >
                          Status
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[72px] text-gray-500 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Gray500"
                        >
                          Open Price
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[71px] text-gray-500 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Gray500"
                        >
                          Your Offer
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[71px] text-gray-500 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Gray500"
                        >
                          Time Left
                        </Text>
                      </div>
                      <Line className="bg-gray-100 h-[1.5px] w-full" />
                    </div>
                    <List
                      className="flex flex-col items-center sm:pr-5 pr-[21px] w-[94%]"
                      orientation="vertical"
                    >
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <div className="flex sm:flex-1 flex-row gap-3.5 items-start justify-between w-[28%] sm:w-full">
                          <Img
                            className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                            src="images/img_ellipse1018_5.png"
                            alt="Ellipse1018"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-base text-black-900 tracking-[0.16px]"
                              size="txtUrbanistSemiBold16"
                            >
                              Peachy Puch#22
                            </Text>
                            <Text
                              className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                              size="txtUrbanistMedium12Gray500"
                            >
                              From Mindblowonstudio
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="text-black-900 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Black900"
                        >
                          Actived
                        </Text>
                        <div className="flex flex-row gap-1.5 items-center justify-center">
                          <Img
                            className="h-4 w-4"
                            src="images/img_sort.svg"
                            alt="sort"
                          />
                          <Text
                            className="text-black-900 text-sm tracking-[0.14px]"
                            size="txtUrbanistMedium14Black900"
                          >
                            5.62 ETH
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1.5 items-center justify-center">
                          <Img
                            className="h-4 w-4"
                            src="images/img_sort.svg"
                            alt="sort One"
                          />
                          <Text
                            className="text-black-900 text-sm tracking-[0.14px]"
                            size="txtUrbanistMedium14Black900"
                          >
                            5.62 ETH
                          </Text>
                        </div>
                        <Text
                          className="text-black-900 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Black900"
                        >
                          1h 19m
                        </Text>
                      </div>
                      <Line className="self-center h-[1.5px] bg-gray-100 w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                        <div className="flex md:flex-1 flex-row gap-3.5 items-center justify-between w-[33%] md:w-full">
                          <Img
                            className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                            src="images/img_group33978.png"
                            alt="Ellipse1018 One"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-base text-black-900 tracking-[0.16px]"
                              size="txtUrbanistSemiBold16"
                            >
                              Dayco Serpentine Belt
                            </Text>
                            <Text
                              className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                              size="txtUrbanistMedium12Gray500"
                            >
                              From Marvin McKinney
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[25px] text-black-900 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Black900"
                        >
                          On Going
                        </Text>
                        <div className="flex md:flex-1 flex-row gap-1.5 items-center justify-center md:ml-[0] ml-[51px] w-[12%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_sort.svg"
                            alt="sort One"
                          />
                          <Text
                            className="text-black-900 text-sm tracking-[0.14px]"
                            size="txtUrbanistMedium14Black900"
                          >
                            5.62 ETH
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row gap-1.5 items-center justify-center md:ml-[0] ml-[63px] w-[12%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_sort.svg"
                            alt="sort One One"
                          />
                          <Text
                            className="text-black-900 text-sm tracking-[0.14px]"
                            size="txtUrbanistMedium14Black900"
                          >
                            5.62 ETH
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[59px] text-black-900 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Black900"
                        >
                          1h 19m
                        </Text>
                      </div>
                      <Line className="self-center h-[1.5px] bg-gray-100 w-full" />
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <div className="flex sm:flex-1 flex-row gap-3.5 items-center justify-between w-[29%] sm:w-full">
                          <Img
                            className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                            src="images/img_group33978_1.png"
                            alt="Ellipse1018 Two"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-base text-black-900 tracking-[0.16px]"
                              size="txtUrbanistSemiBold16"
                            >
                              Pile of Many Plates
                            </Text>
                            <Text
                              className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                              size="txtUrbanistMedium12Gray500"
                            >
                              From Ralphi Arness
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="text-black-900 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Black900"
                        >
                          On Going
                        </Text>
                        <div className="flex flex-row gap-1.5 items-center justify-center">
                          <Img
                            className="h-4 w-4"
                            src="images/img_sort.svg"
                            alt="sort Two"
                          />
                          <Text
                            className="text-black-900 text-sm tracking-[0.14px]"
                            size="txtUrbanistMedium14Black900"
                          >
                            5.62 ETH
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1.5 items-center justify-center">
                          <Img
                            className="h-4 w-4"
                            src="images/img_sort.svg"
                            alt="sort One Two"
                          />
                          <Text
                            className="text-black-900 text-sm tracking-[0.14px]"
                            size="txtUrbanistMedium14Black900"
                          >
                            5.62 ETH
                          </Text>
                        </div>
                        <Text
                          className="text-black-900 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Black900"
                        >
                          1h 19m
                        </Text>
                      </div>
                      <Line className="self-center h-[1.5px] bg-gray-100 w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                        <div className="flex md:flex-1 flex-row gap-3.5 items-start justify-between w-[31%] md:w-full">
                          <Img
                            className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                            src="images/img_group33978_2.png"
                            alt="Ellipse1018 Three"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-base text-black-900 tracking-[0.16px]"
                              size="txtUrbanistSemiBold16"
                            >
                              Worldpac Alternator
                            </Text>
                            <Text
                              className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                              size="txtUrbanistMedium12Gray500"
                            >
                              From Annette Black
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[37px] text-black-900 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Black900"
                        >
                          Ended
                        </Text>
                        <div className="flex md:flex-1 flex-row gap-1.5 items-center justify-center md:ml-[0] ml-[70px] w-[12%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_sort.svg"
                            alt="sort Three"
                          />
                          <Text
                            className="text-black-900 text-sm tracking-[0.14px]"
                            size="txtUrbanistMedium14Black900"
                          >
                            5.62 ETH
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row gap-1.5 items-center justify-center md:ml-[0] ml-[63px] w-[12%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_sort.svg"
                            alt="sort One Three"
                          />
                          <Text
                            className="text-black-900 text-sm tracking-[0.14px]"
                            size="txtUrbanistMedium14Black900"
                          >
                            5.62 ETH
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[59px] text-black-900 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Black900"
                        >
                          1h 19m
                        </Text>
                      </div>
                      <Line className="self-center h-[1.5px] bg-gray-100 w-full" />
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                        <div className="flex md:flex-1 flex-row gap-3.5 items-start justify-between w-[24%] md:w-full">
                          <Img
                            className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                            src="images/img_group33978_5.png"
                            alt="Ellipse1018 Four"
                          />
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-base text-black-900 tracking-[0.16px]"
                              size="txtUrbanistSemiBold16"
                            >
                              Fram Oil Filter
                            </Text>
                            <Text
                              className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                              size="txtUrbanistMedium12Gray500"
                            >
                              From Eleanor Pena
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[85px] text-black-900 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Black900"
                        >
                          Actived
                        </Text>
                        <div className="flex md:flex-1 flex-row gap-1.5 items-center justify-center md:ml-[0] ml-[63px] w-[12%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_sort.svg"
                            alt="sort Four"
                          />
                          <Text
                            className="text-black-900 text-sm tracking-[0.14px]"
                            size="txtUrbanistMedium14Black900"
                          >
                            5.62 ETH
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-row gap-1.5 items-center justify-center md:ml-[0] ml-[63px] w-[12%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_sort.svg"
                            alt="sort One Four"
                          />
                          <Text
                            className="text-black-900 text-sm tracking-[0.14px]"
                            size="txtUrbanistMedium14Black900"
                          >
                            5.62 ETH
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[59px] text-black-900 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Black900"
                        >
                          1h 19m
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-gray-100 p-6 sm:px-5 w-[30%] md:w-full">
              <div className="flex flex-col items-center justify-start mb-4 w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-black-900 text-lg tracking-[0.18px]"
                      size="txtUrbanistMedium18Black900"
                    >
                      Wallet
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_overflowmenu.svg"
                      alt="overflowmenu"
                    />
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-start rounded-[15px] w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-row gap-[26px] h-[150px] items-end justify-between p-3.5 w-full"
                      style={{
                        backgroundImage: "url('images/img_group33970.png')",
                      }}
                    >
                      <div className="flex flex-col gap-9 items-start justify-start mb-0.5 ml-1 mt-1.5">
                        <Text
                          className="text-sm text-white-A700 tracking-[0.14px]"
                          size="txtUrbanistRegular14WhiteA700"
                        >
                          Local Banking Card
                        </Text>
                        <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] w-[99%] md:w-full">
                          <Img
                            className="h-[5px] mt-1"
                            src="images/img_.svg"
                            alt="Two"
                          />
                          <Img
                            className="h-[5px] mt-1"
                            src="images/img_.svg"
                            alt="Three"
                          />
                          <Img
                            className="h-[5px] mt-1"
                            src="images/img_.svg"
                            alt="Four"
                          />
                          <Text
                            className="text-sm text-white-A700_a2 tracking-[0.14px]"
                            size="txtUrbanistRegular14WhiteA700a2"
                          >
                            3982
                          </Text>
                        </div>
                        <Text
                          className="ml-0.5 md:ml-[0] text-sm text-white-A700 tracking-[0.14px]"
                          size="txtUrbanistRegular14WhiteA700"
                        >
                          Kevin Cranel
                        </Text>
                      </div>
                      <Img
                        className="h-4 mt-[106px]"
                        src="images/img_visalogo.svg"
                        alt="visalogo"
                      />
                    </div>
                  </div>
                </div>
                <Line className="bg-gray-100 h-[1.5px] mt-6 w-full" />
                <div className="flex flex-col gap-[30px] items-center justify-start mt-[22px] pt-1.5 w-full">
                  <div className="flex flex-col gap-2 items-center justify-start">
                    <Text
                      className="text-gray-500 text-lg tracking-[0.18px]"
                      size="txtUrbanistRegular18"
                    >
                      Your Balance
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtUrbanistSemiBold24"
                    >
                      $185,424.52
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-between w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[228px] rounded-lg text-center text-sm tracking-[0.14px]"
                      shape="round"
                      color="gray_900"
                      size="lg"
                      variant="fill"
                    >
                      Add New Card
                    </Button>
                    <Button
                      className="flex h-[42px] items-center justify-center rounded-lg w-[42px]"
                      shape="round"
                      color="gray_900_67"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_topup.png"
                        alt="TopUp"
                      />
                    </Button>
                  </div>
                </div>
                <Line className="bg-gray-100 h-[1.5px] mt-6 w-full" />
                <div className="flex flex-col gap-5 items-start justify-start mt-[33px] w-full">
                  <Text
                    className="text-black-900 text-lg tracking-[0.18px]"
                    size="txtUrbanistMedium18Black900"
                  >
                    Transaction History
                  </Text>
                  <List
                    className="flex flex-col gap-[24.5px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row gap-6 items-center justify-between w-full">
                      <div className="flex flex-row gap-3.5 items-center justify-between w-[64%]">
                        <Button
                          className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                          shape="circle"
                          color="gray_50"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-6"
                            src="images/img_icon.png"
                            alt="Icon"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-base text-black-900 tracking-[0.16px]"
                            size="txtUrbanistSemiBold16"
                          >
                            Exchange to ETH
                          </Text>
                          <Text
                            className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                            size="txtUrbanistMedium12Gray500"
                          >
                            Today at 4:13 PM
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-1.5 items-center justify-start w-[28%]">
                        <Img
                          className="h-4 w-4"
                          src="images/img_sort.svg"
                          alt="sort Five"
                        />
                        <Text
                          className="text-black-900 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Black900"
                        >
                          2.22 ETH
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1.5px] bg-gray-100 w-full" />
                    <div className="flex flex-1 flex-row items-center justify-between w-full">
                      <div className="flex flex-row gap-3.5 items-center justify-between w-[58%]">
                        <Button
                          className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                          shape="circle"
                          color="gray_50"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-6"
                            src="images/img_topup.png"
                            alt="Frame162471"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-base text-black-900 tracking-[0.16px]"
                            size="txtUrbanistSemiBold16"
                          >
                            Enefty Top Up
                          </Text>
                          <Text
                            className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                            size="txtUrbanistMedium12Gray500"
                          >
                            Today at 4:23 PM
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-1.5 items-center justify-start w-[26%]">
                        <Img
                          className="h-4 w-4"
                          src="images/img_sort.svg"
                          alt="sort Six"
                        />
                        <Text
                          className="text-black-900 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Black900"
                        >
                          1.32 ETH
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1.5px] bg-gray-100 w-full" />
                    <div className="flex flex-1 flex-row gap-[19px] items-center justify-between w-full">
                      <div className="flex flex-row gap-3.5 items-center justify-between w-[66%]">
                        <Button
                          className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                          shape="circle"
                          color="gray_50"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-6"
                            src="images/img_icon_gray_900.png"
                            alt="Icon One"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-base text-black-900 tracking-[0.16px]"
                            size="txtUrbanistSemiBold16"
                          >
                            Open Bid Success
                          </Text>
                          <Text
                            className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                            size="txtUrbanistMedium12Gray500"
                          >
                            Yesterday at 5:12 AM
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-1.5 items-start justify-start w-[28%]">
                        <Img
                          className="h-4 w-4"
                          src="images/img_sort.svg"
                          alt="sort Seven"
                        />
                        <Text
                          className="text-black-900 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Black900"
                        >
                          5.56 ETH
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1.5px] bg-gray-100 w-full" />
                    <div className="flex flex-1 flex-row gap-[23px] items-center justify-between w-full">
                      <div className="flex flex-row gap-3.5 items-center justify-between w-[66%]">
                        <Button
                          className="flex items-center justify-center rounded-[21px] w-[42px]"
                          shape="circle"
                          color="gray_50"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-6"
                            src="images/img_icon_gray_900.png"
                            alt="Icon Two"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-base text-black-900 tracking-[0.16px]"
                            size="txtUrbanistSemiBold16"
                          >
                            Open Bid Success
                          </Text>
                          <Text
                            className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                            size="txtUrbanistMedium12Gray500"
                          >
                            Yesterday at 3:12 AM
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-1.5 items-center justify-start w-[27%]">
                        <Img
                          className="h-4 w-4"
                          src="images/img_sort.svg"
                          alt="sort Eight"
                        />
                        <Text
                          className="text-black-900 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Black900"
                        >
                          2.21 ETH
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1.5px] bg-gray-100 w-full" />
                    <div className="flex flex-1 flex-row gap-9 items-center justify-between w-full">
                      <div className="flex flex-row gap-3.5 items-center justify-between w-3/5">
                        <Button
                          className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                          shape="circle"
                          color="gray_50"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-6"
                            src="images/img_topup.png"
                            alt="Frame162471 One"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-base text-black-900 tracking-[0.16px]"
                            size="txtUrbanistSemiBold16"
                          >
                            Enefty Top Up
                          </Text>
                          <Text
                            className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                            size="txtUrbanistMedium12Gray500"
                          >
                            Yesterday at 3:12 AM
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-1.5 items-center justify-start w-[28%]">
                        <Img
                          className="h-4 w-4"
                          src="images/img_sort.svg"
                          alt="sort Nine"
                        />
                        <Text
                          className="text-black-900 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Black900"
                        >
                          2.32 ETH
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfileWalletPage;
