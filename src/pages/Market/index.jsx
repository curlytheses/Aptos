import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const userTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MarketPage = () => {
  const navigate = useNavigate();

  const [searchinputvalue, setSearchinputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-5 md:gap-5 items-start mx-auto pb-[50px] w-full">
        <Sidebar className="!sticky !w-[302px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="flex flex-col gap-[50px] items-start justify-start mx-auto my-[34px] w-[89%]">
            <div className="flex flex-row gap-3.5 items-start justify-start ml-4 md:ml-[0] w-[67%] md:w-full">
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
                    <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-[47%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_car.svg"
                        alt="car"
                      />
                      <Text
                        className="text-gray-500 text-lg tracking-[0.18px]"
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
                <div className="flex flex-col font-outfit gap-2 items-center justify-start w-full">
                  <div className="bg-gray-900_5f flex flex-col items-start justify-start p-2.5 rounded-[10px] w-full">
                    <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-[42%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user_3.svg"
                        alt="user"
                      />
                      <Text
                        className="text-gray-900 text-lg tracking-[0.18px]"
                        size="txtOutfitMedium18"
                      >
                        Market
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col font-urbanist items-start justify-start p-2.5 w-full"
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
                    className="common-pointer flex flex-col font-urbanist items-start justify-start p-2.5 w-full"
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
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                    onClick={() => navigate("/myprofilewallet")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-[38%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_computer.svg"
                        alt="computer"
                      />
                      <Text
                        className="text-gray-500 text-lg tracking-[0.18px]"
                        size="txtUrbanistMedium18"
                      >
                        Wallet
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                    onClick={() => navigate("/myprofilehistory")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-2/5 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_clock_24X24.svg"
                        alt="clock Two"
                      />
                      <Text
                        className="text-gray-500 text-lg tracking-[0.18px]"
                        size="txtUrbanistMedium18"
                      >
                        History
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-urbanist md:h-[246px] h-[258px] ml-4 md:ml-[0] relative w-[88%]">
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
        <div className="flex flex-1 flex-col gap-[39px] items-center justify-start md:px-5 w-full">
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
          <div className="flex flex-col font-urbanist gap-5 items-start justify-start w-[95%] md:w-full">
            <Text
              className="sm:text-3xl md:text-[32px] text-[34px] text-black-900 tracking-[0.34px]"
              size="txtUrbanistSemiBold34"
            >
              Discover
            </Text>
            <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start rounded-[14px] w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[134px] rounded-[14px]"
                  leftIcon={
                    <Img
                      className="h-6 ml-4 mr-2.5 my-3.5"
                      src="images/img_user_4.svg"
                      alt="user"
                    />
                  }
                  color="gray_100"
                  size="xl"
                  variant="outline"
                >
                  <div className="font-medium text-base text-left tracking-[0.16px]">
                    Category
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[137px] ml-6 sm:ml-[0] rounded-[14px]"
                  leftIcon={
                    <Img
                      className="h-6 ml-4 mr-2.5 my-3.5"
                      src="images/img_signal_24X24.svg"
                      alt="signal"
                    />
                  }
                  color="gray_100"
                  size="xl"
                  variant="outline"
                >
                  <div className="font-medium text-base text-left tracking-[0.16px]">
                    Collection
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[151px] ml-6 sm:ml-[0] rounded-[14px]"
                  leftIcon={
                    <Img
                      className="h-6 ml-4 mr-2.5 my-3.5"
                      src="images/img_clock_3.svg"
                      alt="clock"
                    />
                  }
                  color="gray_100"
                  size="xl"
                  variant="outline"
                >
                  <div className="font-medium text-base text-left tracking-[0.16px]">
                    Price Range
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[151px] sm:ml-[0] ml-[447px] rounded-[14px]"
                  leftIcon={
                    <Img
                      className="h-6 ml-4 mr-2.5 my-3.5"
                      src="images/img_menu.svg"
                      alt="menu"
                    />
                  }
                  color="gray_100"
                  size="xl"
                  variant="outline"
                >
                  <div className="font-medium text-base text-left tracking-[0.16px]">
                    Filter & Sort
                  </div>
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start mt-[30px] w-full">
                <div className="md:gap-5 gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[140px] items-end justify-start p-2 rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group33978.png')",
                      }}
                    >
                      <div className="flex flex-row gap-2 items-center justify-end mb-[94px] w-[51%] md:w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[75px] rounded-[14px] text-center text-xs tracking-[0.12px]"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          2h 4m 32s
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          shape="circle"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-[18px]"
                            src="images/img_heart.svg"
                            alt="heart"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start mb-3 w-[94%] md:w-full">
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <Text
                          className="text-base text-black-900 tracking-[0.16px]"
                          size="txtUrbanistSemiBold16"
                        >
                          Dayco Serpentine Belt
                        </Text>
                        <Text
                          className="text-gray-500 text-xs tracking-[0.12px]"
                          size="txtUrbanistMedium12Gray500"
                        >
                          By Marvin McKinney
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col font-outfit items-start justify-start">
                          <Text
                            className="text-[10px] text-gray-500 tracking-[0.10px]"
                            size="txtOutfitRegular10"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-1.5 items-center justify-start mt-1 w-[97%] md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_sort.svg"
                              alt="sort"
                            />
                            <Text
                              className="text-black-900 text-sm tracking-[0.14px]"
                              size="txtUrbanistMedium14Black900"
                            >
                              18,99 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] rounded-lg text-center text-xs tracking-[0.12px]"
                          onClick={() => navigate("/marketdetail")}
                          shape="round"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[140px] items-end justify-start p-2 rounded-[12px] w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_group33978_140X240.png')",
                      }}
                    >
                      <div className="flex flex-row gap-2 items-center justify-end mb-[94px] w-[51%] md:w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[75px] rounded-[14px] text-center text-xs tracking-[0.12px]"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          2h 4m 32s
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          shape="circle"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-[18px]"
                            src="images/img_heart.svg"
                            alt="heart One"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start mb-3 w-[94%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-base text-black-900 tracking-[0.16px]"
                          size="txtUrbanistSemiBold16"
                        >
                          Mad Ballot Holder
                        </Text>
                        <Text
                          className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                          size="txtUrbanistMedium12Gray500"
                        >
                          By Angelina Cruzz
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col font-outfit items-start justify-start">
                          <Text
                            className="text-[10px] text-gray-500 tracking-[0.10px]"
                            size="txtOutfitRegular10"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-1.5 items-center justify-start mt-1 w-[88%] md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_sort.svg"
                              alt="sort One"
                            />
                            <Text
                              className="text-black-900 text-sm tracking-[0.14px]"
                              size="txtUrbanistMedium14Black900"
                            >
                              18,2 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] rounded-lg text-center text-xs tracking-[0.12px]"
                          onClick={() => navigate("/marketdetail")}
                          shape="round"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[140px] items-end justify-start p-2 rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group33978_1.png')",
                      }}
                    >
                      <div className="flex flex-row gap-2 items-center justify-end mb-[94px] w-[51%] md:w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[75px] rounded-[14px] text-center text-xs tracking-[0.12px]"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          2h 4m 32s
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          shape="circle"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-[18px]"
                            src="images/img_heart.svg"
                            alt="heart Two"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start mb-3 w-[94%] md:w-full">
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
                          By Ralphi Arness
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col font-outfit items-start justify-start">
                          <Text
                            className="text-[10px] text-gray-500 tracking-[0.10px]"
                            size="txtOutfitRegular10"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-1.5 items-center justify-start mt-1 w-[92%] md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_sort.svg"
                              alt="sort Two"
                            />
                            <Text
                              className="text-black-900 text-sm tracking-[0.14px]"
                              size="txtUrbanistMedium14Black900"
                            >
                              4,82 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] rounded-lg text-center text-xs tracking-[0.12px]"
                          onClick={() => navigate("/marketdetail")}
                          shape="round"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[140px] items-end justify-start p-2 rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group33978_2.png')",
                      }}
                    >
                      <div className="flex flex-row gap-2 items-center justify-end mb-[94px] w-[51%] md:w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[75px] rounded-[14px] text-center text-xs tracking-[0.12px]"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          2h 4m 32s
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          shape="circle"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-[18px]"
                            src="images/img_heart.svg"
                            alt="heart Three"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start mb-3 w-[94%] md:w-full">
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
                          By Annette Black
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col font-outfit items-start justify-start">
                          <Text
                            className="text-[10px] text-gray-500 tracking-[0.10px]"
                            size="txtOutfitRegular10"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-1.5 items-center justify-start mt-1 w-[92%] md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_sort.svg"
                              alt="sort Three"
                            />
                            <Text
                              className="text-black-900 text-sm tracking-[0.14px]"
                              size="txtUrbanistMedium14Black900"
                            >
                              4,82 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] rounded-lg text-center text-xs tracking-[0.12px]"
                          onClick={() => navigate("/marketdetail")}
                          shape="round"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[140px] items-end justify-start p-2 rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group33978_3.png')",
                      }}
                    >
                      <div className="flex flex-row gap-2 items-center justify-end mb-[94px] w-[51%] md:w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[75px] rounded-[14px] text-center text-xs tracking-[0.12px]"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          2h 4m 32s
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          shape="circle"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-[18px]"
                            src="images/img_heart.svg"
                            alt="heart Four"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start mb-3 w-[94%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-base text-black-900 tracking-[0.16px]"
                          size="txtUrbanistSemiBold16"
                        >
                          Duralast Ball Joint - Upper
                        </Text>
                        <Text
                          className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                          size="txtUrbanistMedium12Gray500"
                        >
                          By Jacob Jones
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col font-outfit items-start justify-start">
                          <Text
                            className="text-[10px] text-gray-500 tracking-[0.10px]"
                            size="txtOutfitRegular10"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-1.5 items-center justify-start mt-1 w-[92%] md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_sort.svg"
                              alt="sort Four"
                            />
                            <Text
                              className="text-black-900 text-sm tracking-[0.14px]"
                              size="txtUrbanistMedium14Black900"
                            >
                              4,30 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] rounded-lg text-center text-xs tracking-[0.12px]"
                          onClick={() => navigate("/marketdetail")}
                          shape="round"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[140px] items-end justify-start p-2 rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group33978_4.png')",
                      }}
                    >
                      <div className="flex flex-row gap-2 items-center justify-end mb-[94px] w-[51%] md:w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[75px] rounded-[14px] text-center text-xs tracking-[0.12px]"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          2h 4m 32s
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          shape="circle"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-[18px]"
                            src="images/img_heart.svg"
                            alt="heart Five"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start mb-3 w-[94%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-base text-black-900 tracking-[0.16px]"
                          size="txtUrbanistSemiBold16"
                        >
                          Rain X Wiper Blade Front
                        </Text>
                        <Text
                          className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                          size="txtUrbanistMedium12Gray500"
                        >
                          By Brooklyn Simmons
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col font-outfit items-start justify-start">
                          <Text
                            className="text-[10px] text-gray-500 tracking-[0.10px]"
                            size="txtOutfitRegular10"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-1.5 items-center justify-start mt-1 w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_sort.svg"
                              alt="sort Five"
                            />
                            <Text
                              className="text-black-900 text-sm tracking-[0.14px]"
                              size="txtUrbanistMedium14Black900"
                            >
                              25,70 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] rounded-lg text-center text-xs tracking-[0.12px]"
                          onClick={() => navigate("/marketdetail")}
                          shape="round"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[140px] items-end justify-start p-2 rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group33978_5.png')",
                      }}
                    >
                      <div className="flex flex-row gap-2 items-center justify-end mb-[94px] w-[51%] md:w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[75px] rounded-[14px] text-center text-xs tracking-[0.12px]"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          2h 4m 32s
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          shape="circle"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-[18px]"
                            src="images/img_heart.svg"
                            alt="heart Six"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start mb-3 w-[94%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
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
                          By Eleanor Pena
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col font-outfit items-start justify-start">
                          <Text
                            className="text-[10px] text-gray-500 tracking-[0.10px]"
                            size="txtOutfitRegular10"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-1.5 items-center justify-start mt-1 w-[91%] md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_sort.svg"
                              alt="sort Six"
                            />
                            <Text
                              className="text-black-900 text-sm tracking-[0.14px]"
                              size="txtUrbanistMedium14Black900"
                            >
                              3,89 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] rounded-lg text-center text-xs tracking-[0.12px]"
                          onClick={() => navigate("/marketdetail")}
                          shape="round"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[140px] items-end justify-start p-2 rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group33978_6.png')",
                      }}
                    >
                      <div className="flex flex-row gap-2 items-center justify-end mb-[94px] w-[51%] md:w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[75px] rounded-[14px] text-center text-xs tracking-[0.12px]"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          2h 4m 32s
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          shape="circle"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-[18px]"
                            src="images/img_heart.svg"
                            alt="heart Seven"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start mb-3 w-[94%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-base text-black-900 tracking-[0.16px]"
                          size="txtUrbanistSemiBold16"
                        >
                          Worldpac Spark Plug
                        </Text>
                        <Text
                          className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                          size="txtUrbanistMedium12Gray500"
                        >
                          By Savannah Nguyen
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col font-outfit items-start justify-start">
                          <Text
                            className="text-[10px] text-gray-500 tracking-[0.10px]"
                            size="txtOutfitRegular10"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-1.5 items-start justify-start mt-1 w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_sort.svg"
                              alt="sort Seven"
                            />
                            <Text
                              className="text-black-900 text-sm tracking-[0.14px]"
                              size="txtUrbanistMedium14Black900"
                            >
                              1,54 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] rounded-lg text-center text-xs tracking-[0.12px]"
                          onClick={() => navigate("/marketdetail")}
                          shape="round"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[140px] items-end justify-start p-2 rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group33978_7.png')",
                      }}
                    >
                      <div className="flex flex-row gap-2 items-center justify-end mb-[94px] w-[51%] md:w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[75px] rounded-[14px] text-center text-xs tracking-[0.12px]"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          2h 4m 32s
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          shape="circle"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-[18px]"
                            src="images/img_heart.svg"
                            alt="heart Eight"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start mb-3 w-[94%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-base text-black-900 tracking-[0.16px]"
                          size="txtUrbanistSemiBold16"
                        >
                          Diehard BATTERY-SILVER
                        </Text>
                        <Text
                          className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                          size="txtUrbanistMedium12Gray500"
                        >
                          By Ralph Edwards
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col font-outfit items-start justify-start">
                          <Text
                            className="text-[10px] text-gray-500 tracking-[0.10px]"
                            size="txtOutfitRegular10"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-1.5 items-center justify-start mt-1 w-[92%] md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_sort.svg"
                              alt="sort Eight"
                            />
                            <Text
                              className="text-black-900 text-sm tracking-[0.14px]"
                              size="txtUrbanistMedium14Black900"
                            >
                              2,78 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] rounded-lg text-center text-xs tracking-[0.12px]"
                          onClick={() => navigate("/marketdetail")}
                          shape="round"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[140px] items-end justify-start p-2 rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group33978_8.png')",
                      }}
                    >
                      <div className="flex flex-row gap-2 items-center justify-end mb-[94px] w-[51%] md:w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[75px] rounded-[14px] text-center text-xs tracking-[0.12px]"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          2h 4m 32s
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          shape="circle"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-[18px]"
                            src="images/img_heart.svg"
                            alt="heart Nine"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start mb-3 w-[94%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-base text-black-900 tracking-[0.16px]"
                          size="txtUrbanistSemiBold16"
                        >
                          Bosch Spark Plug
                        </Text>
                        <Text
                          className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                          size="txtUrbanistMedium12Gray500"
                        >
                          By Guy Hawkins
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col font-outfit items-start justify-start">
                          <Text
                            className="text-[10px] text-gray-500 tracking-[0.10px]"
                            size="txtOutfitRegular10"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-1.5 items-center justify-start mt-1 w-[91%] md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_sort.svg"
                              alt="sort Nine"
                            />
                            <Text
                              className="text-black-900 text-sm tracking-[0.14px]"
                              size="txtUrbanistMedium14Black900"
                            >
                              8,99 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] rounded-lg text-center text-xs tracking-[0.12px]"
                          onClick={() => navigate("/marketdetail")}
                          shape="round"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[140px] items-end justify-start p-2 rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group33978_9.png')",
                      }}
                    >
                      <div className="flex flex-row gap-2 items-center justify-end mb-[94px] w-[51%] md:w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[75px] rounded-[14px] text-center text-xs tracking-[0.12px]"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          2h 4m 32s
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          shape="circle"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-[18px]"
                            src="images/img_heart.svg"
                            alt="heart Ten"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start mb-3 w-[94%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-base text-black-900 tracking-[0.16px]"
                          size="txtUrbanistSemiBold16"
                        >
                          Valvoline Engine Oil
                        </Text>
                        <Text
                          className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                          size="txtUrbanistMedium12Gray500"
                        >
                          By Albert Flores
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col font-outfit items-start justify-start">
                          <Text
                            className="text-[10px] text-gray-500 tracking-[0.10px]"
                            size="txtOutfitRegular10"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-1.5 items-center justify-start mt-1 w-[97%] md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_sort.svg"
                              alt="sort Ten"
                            />
                            <Text
                              className="text-black-900 text-sm tracking-[0.14px]"
                              size="txtUrbanistMedium14Black900"
                            >
                              51,23 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] rounded-lg text-center text-xs tracking-[0.12px]"
                          onClick={() => navigate("/marketdetail")}
                          shape="round"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[140px] items-end justify-start p-2 rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group33978_10.png')",
                      }}
                    >
                      <div className="flex flex-row gap-2 items-center justify-end mb-[94px] w-[51%] md:w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[75px] rounded-[14px] text-center text-xs tracking-[0.12px]"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          2h 4m 32s
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                          shape="circle"
                          color="gray_900_26"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-[18px]"
                            src="images/img_heart.svg"
                            alt="heart Eleven"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start mb-3 w-[94%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
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
                          By Jerome Bell
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col font-outfit items-start justify-start">
                          <Text
                            className="text-[10px] text-gray-500 tracking-[0.10px]"
                            size="txtOutfitRegular10"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-1.5 items-center justify-start mt-1 w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_sort.svg"
                              alt="sort Eleven"
                            />
                            <Text
                              className="text-black-900 text-sm tracking-[0.14px]"
                              size="txtUrbanistMedium14Black900"
                            >
                              25,00 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] rounded-lg text-center text-xs tracking-[0.12px]"
                          onClick={() => navigate("/marketdetail")}
                          shape="round"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[106px] mt-[50px] rounded-lg text-center text-sm tracking-[0.14px]"
                shape="round"
                color="gray_900"
                size="xs"
                variant="outline"
              >
                Load More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketPage;
