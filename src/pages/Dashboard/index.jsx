import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const DashboardPage = () => {
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
                  className="ml-4 md:ml-[0] text-black-900 text-xs tracking-[0.12px]"
                  size="txtUrbanistMedium12"
                >
                  GENERAL
                </Text>
                <div className="flex flex-col font-outfit gap-2 items-center justify-start w-full">
                  <div className="bg-gray-900_5f flex flex-col items-start justify-start p-2.5 rounded-[10px] w-full">
                    <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-[55%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_eye.svg"
                        alt="eye"
                      />
                      <Text
                        className="text-gray-900 text-lg tracking-[0.18px]"
                        size="txtOutfitMedium18"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col font-urbanist items-start justify-start p-2.5 w-full"
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
                    className="common-pointer flex flex-col font-urbanist items-start justify-start p-2.5 w-full"
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
                        alt="clock"
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
                        alt="clock One"
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
              <div className="flex flex-row gap-3 items-center justify-between w-[27%]">
                <Img
                  className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                  src="images/img_ellipse1015.png"
                  alt="Ellipse1020"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-urbanist gap-[34px] items-center justify-between w-[98%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[68%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[250px] items-center justify-start rounded-[15px] w-full"
                  style={{
                    backgroundImage: "url('images/img_group33913.png')",
                  }}
                >
                  <div className="bg-gradient  flex flex-col gap-[34px] items-start justify-center p-[30px] sm:px-5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start mt-[19px]">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[0.32px]"
                        size="txtUrbanistSemiBold32"
                      >
                        Create and Sell Extraordinary NFTs
                      </Text>
                      <Text
                        className="text-sm text-white-A700_a2 tracking-[0.14px]"
                        size="txtUrbanistMedium14"
                      >
                        The world’s first and largest digital marketplace for
                        crypto NFTs
                      </Text>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-start mb-[19px] w-[39%] md:w-full">
                      <Button
                        className="cursor-pointer font-semibold min-w-[120px] rounded-lg text-center text-sm tracking-[0.14px]"
                        shape="round"
                        color="white_A700"
                        size="lg"
                        variant="fill"
                      >
                        Explore More
                      </Button>
                      <Button
                        className="cursor-pointer font-semibold min-w-[120px] rounded-lg text-center text-sm tracking-[0.14px]"
                        shape="round"
                        color="white_A700"
                        size="lg"
                        variant="outline"
                      >
                        Sell Artwork
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-center justify-start mt-10 w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtUrbanistSemiBold24"
                  >
                    Trending Auction
                  </Text>
                  <Text
                    className="text-gray-900 text-sm tracking-[0.14px]"
                    size="txtUrbanistMedium14Gray900"
                  >
                    View All
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[140px] items-end justify-start p-2 rounded-[12px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group33917.png')",
                      }}
                    >
                      <div className="flex flex-row gap-2 items-center justify-end mb-[94px] w-[55%] md:w-full">
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
                    <div className="flex flex-col gap-[18px] items-start justify-start mb-3 w-[93%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-base text-black-900 tracking-[0.16px]"
                          size="txtUrbanistSemiBold16"
                        >
                          The Unfortable Facer
                        </Text>
                        <Text
                          className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                          size="txtUrbanistMedium12Gray500"
                        >
                          By Bane Riccardo
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[38px] items-center justify-between w-full">
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
                        backgroundImage:
                          "url('images/img_group33917_140X222.png')",
                      }}
                    >
                      <div className="flex flex-row gap-2 items-center justify-end mb-[94px] w-[55%] md:w-full">
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
                    <div className="flex flex-col gap-[18px] items-start justify-start mb-3 w-[93%] md:w-full">
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
                      <div className="flex flex-row gap-[38px] items-center justify-between w-full">
                        <div className="flex flex-col font-outfit items-start justify-start">
                          <Text
                            className="text-[10px] text-gray-500 tracking-[0.10px]"
                            size="txtOutfitRegular10"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-1.5 items-center justify-start mt-1 w-[98%] md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_sort.svg"
                              alt="sort One"
                            />
                            <Text
                              className="text-black-900 text-sm tracking-[0.14px]"
                              size="txtUrbanistMedium14Black900"
                            >
                              4,32 ETH
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
                        backgroundImage: "url('images/img_group33917_1.png')",
                      }}
                    >
                      <div className="flex flex-row gap-2 items-center justify-end mb-[94px] w-[55%] md:w-full">
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
                    <div className="flex flex-col gap-[18px] items-start justify-start mb-3 w-[93%] md:w-full">
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
                      <div className="flex flex-row gap-[38px] items-center justify-between w-full">
                        <div className="flex flex-col font-outfit items-start justify-start">
                          <Text
                            className="text-[10px] text-gray-500 tracking-[0.10px]"
                            size="txtOutfitRegular10"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-1.5 items-center justify-start mt-1 w-[98%] md:w-full">
                            <Img
                              className="h-4 w-4"
                              src="images/img_sort.svg"
                              alt="sort Two"
                            />
                            <Text
                              className="text-black-900 text-sm tracking-[0.14px]"
                              size="txtUrbanistMedium14Black900"
                            >
                              4,32 ETH
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
              <div className="flex flex-col gap-5 items-center justify-start mt-[30px] w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtUrbanistSemiBold24"
                  >
                    Top Collection
                  </Text>
                  <Text
                    className="text-gray-900 text-sm tracking-[0.14px]"
                    size="txtUrbanistMedium14Gray900"
                  >
                    View All
                  </Text>
                </div>
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between pb-0.5 w-full">
                    <Text
                      className="text-gray-500 text-xs tracking-[0.12px]"
                      size="txtUrbanistMedium12Gray500"
                    >
                      Collection
                    </Text>
                    <div className="flex sm:flex-1 flex-row items-start justify-between w-[66%] sm:w-full">
                      <Text
                        className="text-gray-500 text-xs tracking-[0.12px]"
                        size="txtUrbanistMedium12Gray500"
                      >
                        Volume
                      </Text>
                      <Text
                        className="text-gray-500 text-xs tracking-[0.12px]"
                        size="txtUrbanistMedium12Gray500"
                      >
                        24h %
                      </Text>
                      <Text
                        className="text-gray-500 text-xs tracking-[0.12px]"
                        size="txtUrbanistMedium12Gray500"
                      >
                        Floor Price
                      </Text>
                      <Text
                        className="text-gray-500 text-xs tracking-[0.12px]"
                        size="txtUrbanistMedium12Gray500"
                      >
                        Owners
                      </Text>
                      <Text
                        className="text-gray-500 text-xs tracking-[0.12px]"
                        size="txtUrbanistMedium12Gray500"
                      >
                        Items
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex flex-col items-center pr-[7px] w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex md:flex-1 flex-row gap-3.5 items-center justify-between w-[21%] md:w-full">
                        <Img
                          className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                          src="images/img_ellipse1018.png"
                          alt="Ellipse1018"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-base text-black-900 tracking-[0.16px]"
                            size="txtUrbanistSemiBold16"
                          >
                            Doodle Lucu
                          </Text>
                          <Text
                            className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                            size="txtUrbanistMedium12Gray500"
                          >
                            By Doodles
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-[65%] md:w-full">
                        <div className="flex flex-row font-urbanist items-center justify-evenly w-[11%] sm:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_sort.svg"
                            alt="sort Three"
                          />
                          <Text
                            className="text-black-900 text-sm tracking-[0.14px]"
                            size="txtUrbanistMedium14Black900"
                          >
                            14,32
                          </Text>
                        </div>
                        <Text
                          className="sm:ml-[0] ml-[60px] text-green-600 text-sm tracking-[0.14px]"
                          size="txtOutfitMedium14"
                        >
                          + 20,4%
                        </Text>
                        <div className="flex flex-row font-urbanist items-center justify-center sm:ml-[0] ml-[53px] w-[9%] sm:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_sort.svg"
                            alt="sort One"
                          />
                          <Text
                            className="h-[18px] ml-1 text-black-900 text-sm tracking-[0.14px]"
                            size="txtUrbanistMedium14Black900"
                          >
                            2,3
                          </Text>
                        </div>
                        <Text
                          className="sm:ml-[0] ml-[91px] text-black-900 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Black900"
                        >
                          2,2K
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[85px] text-black-900 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Black900"
                        >
                          18
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-gray-100 w-full" />
                    <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex md:flex-1 flex-row gap-3.5 items-center justify-between w-[24%] md:w-full">
                        <Img
                          className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                          src="images/img_ellipse1018_42X42.png"
                          alt="Ellipse1018 One"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-base text-black-900 tracking-[0.16px]"
                            size="txtUrbanistSemiBold16"
                          >
                            Kimawi Genesis
                          </Text>
                          <Text
                            className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                            size="txtUrbanistMedium12Gray500"
                          >
                            By Kimawi - Japan
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-row items-start justify-between w-[65%] md:w-full">
                        <div className="flex flex-row font-urbanist items-start justify-evenly">
                          <Img
                            className="h-4 w-4"
                            src="images/img_sort.svg"
                            alt="sort Four"
                          />
                          <Text
                            className="text-black-900 text-sm tracking-[0.14px]"
                            size="txtUrbanistMedium14Black900"
                          >
                            6,11
                          </Text>
                        </div>
                        <Text
                          className="text-red-600 text-sm tracking-[0.14px]"
                          size="txtOutfitMedium14Red600"
                        >
                          - 18,2%
                        </Text>
                        <div className="flex flex-row font-urbanist items-center justify-center">
                          <Img
                            className="h-4 w-4"
                            src="images/img_sort.svg"
                            alt="sort One One"
                          />
                          <Text
                            className="ml-1 text-black-900 text-sm tracking-[0.14px]"
                            size="txtUrbanistMedium14Black900"
                          >
                            12,52
                          </Text>
                        </div>
                        <Text
                          className="text-black-900 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Black900"
                        >
                          1,9K
                        </Text>
                        <Text
                          className="text-black-900 text-sm tracking-[0.14px]"
                          size="txtUrbanistMedium14Black900"
                        >
                          21
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-10 items-center justify-start outline outline-gray-100 p-[26px] sm:px-5 w-[30%] md:w-full">
              <div className="flex flex-col gap-5 items-center justify-start mt-3.5 w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtUrbanistSemiBold18Black900"
                  >
                    Featured Creators
                  </Text>
                  <Text
                    className="mt-0.5 text-gray-900 text-sm tracking-[0.14px]"
                    size="txtUrbanistMedium14Gray900"
                  >
                    See All
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col gap-3 items-center justify-start p-1.5 rounded-[15px] shadow-bs2 w-full">
                  <div className="flex flex-col relative w-full">
                    <Img
                      className="h-[120px] mx-auto object-cover rounded-[12px] w-full"
                      src="images/img_rectangle2043.png"
                      alt="Rectangle2043"
                    />
                    <Img
                      className="h-[52px] mt-[-26px] mx-auto rounded-[50%] w-[52px] z-[1]"
                      src="images/img_ellipse1019.png"
                      alt="Ellipse1019"
                    />
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-start mb-2 w-[94%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-col font-urbanist items-start justify-start">
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <Text
                            className="text-black-900 text-sm tracking-[0.14px]"
                            size="txtUrbanistSemiBold14"
                          >
                            Murakami Flowers
                          </Text>
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        </div>
                        <Text
                          className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                          size="txtUrbanistMedium12Gray500"
                        >
                          @mftmkkus
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-outfit min-w-[64px] my-[5px] rounded-[14px] text-center text-xs tracking-[0.12px]"
                        color="gray_900"
                        size="xs"
                        variant="fill"
                      >
                        Follow
                      </Button>
                    </div>
                    <Line className="bg-gray-100 h-px w-full" />
                    <Text
                      className="leading-[180.00%] text-gray-500 text-xs tracking-[0.12px] w-full"
                      size="txtUrbanistRegular12"
                    >
                      Murakami.Flowers is a work in which artist Takashi
                      Murakami’s representative artwork.....
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-center justify-start mb-[15px] pt-[3px] w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtUrbanistSemiBold18Black900"
                  >
                    Recent Activity
                  </Text>
                  <Text
                    className="mb-0.5 text-gray-900 text-sm tracking-[0.14px]"
                    size="txtUrbanistMedium14Gray900"
                  >
                    See All
                  </Text>
                </div>
                <List
                  className="flex flex-col gap-5 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-[34px] items-center justify-between w-full">
                    <div className="flex flex-row gap-3.5 items-center justify-between w-[62%]">
                      <Img
                        className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                        src="images/img_ellipse1018_1.png"
                        alt="Ellipse1018 Two"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-base text-black-900 tracking-[0.16px]"
                          size="txtUrbanistSemiBold16"
                        >
                          Uzachi #4390
                        </Text>
                        <Text
                          className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                          size="txtUrbanistMedium12Gray500"
                        >
                          From Ragnarok Meta
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start w-[27%]">
                      <Img
                        className="h-4 w-4"
                        src="images/img_sort.svg"
                        alt="sort Five"
                      />
                      <Text
                        className="text-black-900 text-sm tracking-[0.14px]"
                        size="txtUrbanistMedium14Black900"
                      >
                        2.15 ETH
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-gray-100 w-full" />
                  <div className="flex flex-1 flex-row gap-[34px] items-center justify-between w-full">
                    <div className="flex flex-row gap-3.5 items-start justify-between w-3/5">
                      <Img
                        className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                        src="images/img_ellipse1018_2.png"
                        alt="Ellipse1018 Three"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-base text-black-900 tracking-[0.16px]"
                          size="txtUrbanistSemiBold16"
                        >
                          Doodles #3486
                        </Text>
                        <Text
                          className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                          size="txtUrbanistMedium12Gray500"
                        >
                          From Doodles
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start w-[29%]">
                      <Img
                        className="h-4 w-4"
                        src="images/img_sort.svg"
                        alt="sort Six"
                      />
                      <Text
                        className="text-black-900 text-sm tracking-[0.14px]"
                        size="txtUrbanistMedium14Black900"
                      >
                        4.42 ETH
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-gray-100 w-full" />
                  <div className="flex flex-1 flex-row gap-5 items-center justify-between w-full">
                    <div className="flex flex-row gap-3.5 items-start justify-between w-[66%]">
                      <Img
                        className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                        src="images/img_ellipse1018_3.png"
                        alt="Ellipse1018 Four"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-base text-black-900 tracking-[0.16px]"
                          size="txtUrbanistSemiBold16"
                        >
                          Murakami #2766
                        </Text>
                        <Text
                          className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                          size="txtUrbanistMedium12Gray500"
                        >
                          From Murakami
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start w-[27%]">
                      <Img
                        className="h-4 w-4"
                        src="images/img_sort.svg"
                        alt="sort Seven"
                      />
                      <Text
                        className="text-black-900 text-sm tracking-[0.14px]"
                        size="txtUrbanistMedium14Black900"
                      >
                        1.08 ETH
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-gray-100 w-full" />
                  <div className="flex flex-1 flex-row items-center justify-between w-full">
                    <div className="flex flex-row gap-3.5 items-start justify-between w-[59%]">
                      <Img
                        className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                        src="images/img_ellipse1018_4.png"
                        alt="Ellipse1018 Five"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-base text-black-900 tracking-[0.16px]"
                          size="txtUrbanistSemiBold16"
                        >
                          Doodles #2761
                        </Text>
                        <Text
                          className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                          size="txtUrbanistMedium12Gray500"
                        >
                          From Murakami
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-1.5 items-start justify-start w-[26%]">
                      <Img
                        className="h-4 w-4"
                        src="images/img_sort.svg"
                        alt="sort Eight"
                      />
                      <Text
                        className="text-black-900 text-sm tracking-[0.14px]"
                        size="txtUrbanistMedium14Black900"
                      >
                        4.4 ETH
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-gray-100 w-full" />
                  <div className="flex flex-1 flex-row gap-3.5 items-center justify-between w-full">
                    <div className="flex flex-row gap-3.5 items-start justify-between w-[67%]">
                      <Img
                        className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                        src="images/img_ellipse1018_5.png"
                        alt="Ellipse1018 Six"
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
                    <div className="flex flex-row gap-1.5 items-center justify-start w-[29%]">
                      <Img
                        className="h-4 w-4"
                        src="images/img_sort.svg"
                        alt="sort Nine"
                      />
                      <Text
                        className="text-black-900 text-sm tracking-[0.14px]"
                        size="txtUrbanistMedium14Black900"
                      >
                        5.62 ETH
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-px bg-gray-100 w-full" />
                  <div className="flex flex-1 flex-row gap-[33px] items-center justify-between w-full">
                    <div className="flex flex-row gap-3.5 items-center justify-between w-[61%]">
                      <Img
                        className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                        src="images/img_ellipse1018_6.png"
                        alt="Ellipse1018 Seven"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-black-900 tracking-[0.16px]"
                          size="txtUrbanistSemiBold16"
                        >
                          Gemmy #3723
                        </Text>
                        <Text
                          className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                          size="txtUrbanistMedium12Gray500"
                        >
                          From GemmySolana
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start w-[28%]">
                      <Img
                        className="h-4 w-4"
                        src="images/img_sort.svg"
                        alt="sort Ten"
                      />
                      <Text
                        className="text-black-900 text-sm tracking-[0.14px]"
                        size="txtUrbanistMedium14Black900"
                      >
                        5.32 ETH
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
