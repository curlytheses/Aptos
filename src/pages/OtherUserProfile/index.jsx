import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const userTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const OtherUserProfilePage = () => {
  const navigate = useNavigate();

  const [searchinputvalue, setSearchinputvalue] = React.useState("");
  const [searchinputonevalue, setSearchinputonevalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[302px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
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
          <div className="flex flex-col font-urbanist relative w-full">
            <Img
              className="h-[260px] mx-auto object-cover w-full"
              src="images/img_rectangle2057.png"
              alt="Rectangle2057"
            />
            <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between mt-[-84px] mx-auto w-[95%] z-[1]">
              <div className="bg-white-A700 flex flex-col gap-6 items-center justify-center mb-[272px] p-[18px] rounded-[15px] shadow-bs1 w-[23%] md:w-full">
                <div className="flex flex-col gap-4 items-center justify-start mt-4 w-[87%] md:w-full">
                  <Img
                    className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                    src="images/img_ellipse1015_42X42.png"
                    alt="Ellipse1022"
                  />
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-xl tracking-[0.20px]"
                      size="txtUrbanistSemiBold20"
                    >
                      Eleanor Pena
                    </Text>
                    <div className="flex flex-row gap-1.5 items-center justify-between mt-1 w-full">
                      <Text
                        className="text-gray-500 text-xs tracking-[0.12px]"
                        size="txtUrbanistMedium12Gray500"
                      >
                        0x864784f44ajf84bskw4w...
                      </Text>
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_lock_18X18.svg"
                        alt="lock One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mb-2.5 w-full">
                  <Text
                    className="leading-[180.00%] text-center text-gray-500 text-sm tracking-[0.14px] w-full"
                    size="txtUrbanistRegular14Gray500"
                  >
                    Dedicated to create amazing for art exhibition information
                    please check link below:
                  </Text>
                  <div className="flex flex-row gap-1.5 items-center justify-center mt-6 w-[45%] md:w-full">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_globe_18X18.svg"
                      alt="globe"
                    />
                    <Text
                      className="text-black-900 text-xs tracking-[0.12px]"
                      size="txtUrbanistRegular12Black900"
                    >
                      artistictea.io
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-between mt-6 w-[87%] md:w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[88px] rounded-lg text-center text-xs tracking-[0.12px]"
                      shape="round"
                      color="gray_900"
                      size="xs"
                      variant="fill"
                    >
                      Follow
                    </Button>
                    <Button
                      className="flex h-8 items-center justify-center rounded-lg w-8"
                      shape="round"
                      color="gray_100"
                      size="xs"
                      variant="outline"
                    >
                      <Img
                        className="h-[18px]"
                        src="images/img_reply.svg"
                        alt="reply"
                      />
                    </Button>
                    <Button
                      className="flex h-8 items-center justify-center rounded-lg w-8"
                      shape="round"
                      color="gray_100"
                      size="xs"
                      variant="outline"
                    >
                      <Img
                        className="h-[18px]"
                        src="images/img_camera_32X32.svg"
                        alt="camera"
                      />
                    </Button>
                  </div>
                  <Line className="bg-gray-100 h-px mt-6 w-full" />
                  <Text
                    className="mt-[29px] text-gray-500 text-sm tracking-[0.14px]"
                    size="txtUrbanistRegular14Gray500"
                  >
                    Joined April 2021
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[34px] items-center justify-start md:mt-0 mt-[118px] w-3/4 md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex sm:flex-1 flex-row gap-3 items-center justify-between w-[44%] sm:w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[107px] rounded-[18px]"
                      leftIcon={
                        <Img
                          className="h-5 ml-3 mr-2.5 my-2"
                          src="images/img_grid.svg"
                          alt="grid"
                        />
                      }
                      color="black_900"
                      size="sm"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-sm tracking-[0.14px]">
                        Created
                      </div>
                    </Button>
                    <div className="flex flex-row gap-2.5 items-center justify-center p-2 rounded-[18px]">
                      <Img
                        className="h-5 ml-1 w-5"
                        src="images/img_folderadd.svg"
                        alt="folderadd"
                      />
                      <Text
                        className="mr-1 text-gray-500 text-sm tracking-[0.14px]"
                        size="txtUrbanistMedium14Gray500"
                      >
                        Collection
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-center p-2 rounded-[18px]">
                      <Img
                        className="h-5 ml-1 w-5"
                        src="images/img_clock_24X24.svg"
                        alt="clock Three"
                      />
                      <Text
                        className="mr-1 text-gray-500 text-sm tracking-[0.14px]"
                        size="txtUrbanistMedium14Gray500"
                      >
                        History
                      </Text>
                    </div>
                  </div>
                  <Input
                    name="SearchInput One"
                    placeholder="Search by name"
                    value={searchinputonevalue}
                    onChange={(e) => setSearchinputonevalue(e)}
                    className="!placeholder:text-gray-500 !text-gray-500 p-0 text-left text-xs tracking-[0.12px] w-full"
                    wrapClassName="flex sm:flex-1 rounded-lg sm:w-full"
                    prefix={
                      <Img
                        className="cursor-pointer h-[18px] my-[9px] mx-3.5"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    }
                    suffix={
                      <CloseSVG
                        fillColor="#93989a"
                        className="cursor-pointer h-[18px] my-auto"
                        onClick={() => setSearchinputonevalue("")}
                        style={{
                          visibility:
                            searchinputonevalue?.length <= 0
                              ? "hidden"
                              : "visible",
                        }}
                        height={18}
                        width={18}
                        viewBox="0 0 18 18"
                      />
                    }
                    color="gray_300"
                    size="xs"
                    variant="outline"
                  ></Input>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    <div className="bg-white-A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[140px] items-end justify-start p-2 rounded-[12px] w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_group33978_11.png')",
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
                              src="images/img_favorite.svg"
                              alt="favorite"
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
                                alt="sort"
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
                            "url('images/img_group33978_12.png')",
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
                                alt="sort One"
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
                            "url('images/img_group33978_13.png')",
                        }}
                      >
                        <div className="flex flex-row gap-2 items-center justify-end mb-[94px] w-[51%] md:w-full">
                          <Text
                            className="bg-gray-900_26 h-7 justify-center pl-2.5 sm:pr-5 pr-[30px] py-[7px] rounded-[14px] text-white-A700 text-xs tracking-[0.12px] w-[75px]"
                            size="txtUrbanistMedium12WhiteA700"
                          >
                            Ended
                          </Text>
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
                              Fixed Price
                            </Text>
                            <div className="flex flex-row font-urbanist gap-1.5 items-center justify-start mt-1 w-full">
                              <Img
                                className="h-4 w-4"
                                src="images/img_sort.svg"
                                alt="sort Two"
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
                            "url('images/img_group33978_15.png')",
                        }}
                      >
                        <div className="flex flex-row gap-2 items-center justify-end mb-[94px] w-[51%] md:w-full">
                          <Text
                            className="bg-gray-900_26 h-7 justify-center pl-2.5 sm:pr-5 pr-[30px] py-[7px] rounded-[14px] text-white-A700 text-xs tracking-[0.12px] w-[75px]"
                            size="txtUrbanistMedium12WhiteA700"
                          >
                            Ended
                          </Text>
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
                            Uowaw Your Face is Good
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
                              Fixed Price
                            </Text>
                            <div className="flex flex-row font-urbanist gap-1.5 items-center justify-start mt-1 w-[88%] md:w-full">
                              <Img
                                className="h-4 w-4"
                                src="images/img_sort.svg"
                                alt="sort Three"
                              />
                              <Text
                                className="text-black-900 text-sm tracking-[0.14px]"
                                size="txtUrbanistMedium14Black900"
                              >
                                1,32 ETH
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
                            "url('images/img_group33978_16.png')",
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
                            One Blooded Hand
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
                                alt="sort Four"
                              />
                              <Text
                                className="text-black-900 text-sm tracking-[0.14px]"
                                size="txtUrbanistMedium14Black900"
                              >
                                5,52 ETH
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
                            "url('images/img_group33978_14.png')",
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
                              src="images/img_favorite.svg"
                              alt="favorite One"
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
                                alt="sort Five"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherUserProfilePage;
