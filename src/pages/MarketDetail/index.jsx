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

const MarketDetailPage = () => {
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
        <div className="flex flex-1 flex-col gap-[34px] items-center justify-start md:px-5 w-full">
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
          <div className="flex flex-col font-urbanist items-start justify-start w-[94%] md:w-full">
            <div className="bg-gray-50 flex flex-row gap-2 items-center justify-start p-1.5 rounded-lg w-[19%] md:w-full">
              <Text
                className="ml-2.5 text-gray-500 text-sm tracking-[0.14px]"
                size="txtUrbanistMedium14Gray500"
              >
                Marketplace
              </Text>
              <Text
                className="text-gray-500 text-sm tracking-[0.14px]"
                size="txtUrbanistMedium14Gray500"
              >
                <>&gt;</>
              </Text>
              <Text
                className="text-gray-900 text-sm tracking-[0.14px]"
                size="txtUrbanistMedium14Gray900"
              >
                Open Bid
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between mt-[34px] w-[99%] md:w-full">
              <Img
                className="h-[420px] md:h-auto object-cover rounded-[12px]"
                src="images/img_group33978_5.png"
                alt="Rectangle2054"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[0.32px]"
                    size="txtUrbanistSemiBold32Black900"
                  >
                    Dayco Serpentine Belt
                  </Text>
                  <Text
                    className="leading-[180.00%] text-base text-gray-500_ab tracking-[0.16px] w-full"
                    size="txtUrbanistRegular16"
                  >
                    Open repair of infrarenal aortic aneurysm or dissection,
                    plus repair of associated arterial trauma, following
                    unsuccessful endovascular repair; tube prosthesis...
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-8 grid grid-cols-2 mt-5 w-[70%]"
                  orientation="horizontal"
                >
                  <div
                    className="common-pointer flex flex-row gap-3.5 items-center justify-between w-full"
                    onClick={() => navigate("/otheruserprofile")}
                  >
                    <Img
                      className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                      src="images/img_ellipse1015_42X42.png"
                      alt="Ellipse1015 One"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-500 text-sm tracking-[0.14px]"
                        size="txtUrbanistMedium14Gray500"
                      >
                        Creator
                      </Text>
                      <Text
                        className="mt-0.5 text-base text-black-900 tracking-[0.16px]"
                        size="txtUrbanistSemiBold16"
                      >
                        Eleanor Pena
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-row gap-3.5 items-center justify-between w-full"
                    onClick={() => navigate("/otheruserprofile")}
                  >
                    <Img
                      className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                      src="images/img_ellipse1016.png"
                      alt="Ellipse1016"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-gray-500 text-sm tracking-[0.14px]"
                        size="txtUrbanistMedium14Gray500"
                      >
                        Owner
                      </Text>
                      <Text
                        className="mt-0.5 text-base text-black-900 tracking-[0.16px]"
                        size="txtUrbanistSemiBold16"
                      >
                        Ahmad Kazuto
                      </Text>
                    </div>
                  </div>
                </List>
                <Line className="bg-gray-100 h-[1.5px] mt-5 w-full" />
                <div className="flex flex-row gap-10 items-start justify-start mt-[21px] pr-1 w-[68%] md:w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start w-[52%]">
                    <Text
                      className="text-base text-gray-500_ab tracking-[0.16px]"
                      size="txtUrbanistMedium16Gray500ab"
                    >
                      Auction End In
                    </Text>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Button
                        className="cursor-pointer font-semibold h-11 rounded-lg text-center text-xl tracking-[0.20px] w-11"
                        shape="round"
                        color="gray_50"
                        size="xs"
                        variant="fill"
                      >
                        03
                      </Button>
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_user_10X10.svg"
                        alt="user Three"
                      />
                      <Button
                        className="cursor-pointer font-semibold h-11 rounded-lg text-center text-xl tracking-[0.20px] w-11"
                        shape="round"
                        color="gray_50"
                        size="xs"
                        variant="fill"
                      >
                        12
                      </Button>
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_user_10X10.svg"
                        alt="user Four"
                      />
                      <Button
                        className="cursor-pointer font-semibold h-11 rounded-lg text-center text-xl tracking-[0.20px] w-11"
                        shape="round"
                        color="gray_50"
                        size="xs"
                        variant="fill"
                      >
                        42
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start w-[37%]">
                    <Text
                      className="text-base text-gray-500_ab tracking-[0.16px]"
                      size="txtUrbanistMedium16Gray500ab"
                    >
                      Current Bid
                    </Text>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                      <Img
                        className="h-8 w-8"
                        src="images/img_sort.svg"
                        alt="sort"
                      />
                      <Text
                        className="text-black-900 text-xl tracking-[0.20px]"
                        size="txtUrbanistSemiBold20"
                      >
                        3,89 ETH
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-3.5 items-center justify-start mt-[37px] w-[56%] md:w-full">
                  <Button
                    className="flex h-[50px] items-center justify-center rounded-lg w-[50px]"
                    shape="round"
                    color="gray_100"
                    size="lg"
                    variant="outline"
                  >
                    <Img
                      className="h-6"
                      src="images/img_favorite.svg"
                      alt="favorite"
                    />
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[210px] rounded-lg text-center text-sm tracking-[0.14px]"
                    shape="round"
                    color="gray_900"
                    size="2xl"
                    variant="fill"
                  >
                    Place A Bid
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start mt-[50px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtUrbanistSemiBold24"
              >
                More Works by Eleanor Pena
              </Text>
              <List
                className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[140px] items-end justify-start p-2 rounded-[12px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group33978_11.png')",
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
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-base text-black-900 tracking-[0.16px]"
                        size="txtUrbanistSemiBold16"
                      >
                        Person Melirik Kesamping
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
                        <div className="flex flex-row font-urbanist gap-1.5 items-center justify-start mt-1 w-[92%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_sort.svg"
                            alt="sort One"
                          />
                          <Text
                            className="text-black-900 text-sm tracking-[0.14px]"
                            size="txtUrbanistMedium14Black900"
                          >
                            2,42 ETH
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium font-urbanist min-w-[88px] rounded-lg text-center text-xs tracking-[0.12px]"
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
                      backgroundImage: "url('images/img_group33978_12.png')",
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
                        Building Reflection Xd
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
                        <div className="flex flex-row font-urbanist gap-1.5 items-center justify-start mt-1 w-[97%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_sort.svg"
                            alt="sort Two"
                          />
                          <Text
                            className="text-black-900 text-sm tracking-[0.14px]"
                            size="txtUrbanistMedium14Black900"
                          >
                            52,12 ETH
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium font-urbanist min-w-[88px] rounded-lg text-center text-xs tracking-[0.12px]"
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
                      backgroundImage: "url('images/img_group33978_13.png')",
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
                        Natural Atomic Circle
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
                        <div className="flex flex-row font-urbanist gap-1.5 items-center justify-start mt-1 w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_sort.svg"
                            alt="sort Three"
                          />
                          <Text
                            className="text-black-900 text-sm tracking-[0.14px]"
                            size="txtUrbanistMedium14Black900"
                          >
                            22,52 ETH
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium font-urbanist min-w-[88px] rounded-lg text-center text-xs tracking-[0.12px]"
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
                      backgroundImage: "url('images/img_group33978_14.png')",
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
                        Oldtown Artistic Alley
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
                        <div className="flex flex-row font-urbanist gap-1.5 items-center justify-start mt-1 w-[97%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_sort.svg"
                            alt="sort Four"
                          />
                          <Text
                            className="text-black-900 text-sm tracking-[0.14px]"
                            size="txtUrbanistMedium14Black900"
                          >
                            1,224 ETH
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium font-urbanist min-w-[88px] rounded-lg text-center text-xs tracking-[0.12px]"
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
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketDetailPage;
