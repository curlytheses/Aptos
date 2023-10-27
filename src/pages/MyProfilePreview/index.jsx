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

const MyProfilePreviewPage = () => {
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
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[260px] items-end justify-end mx-auto p-[34px] sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group33879.png')" }}
            >
              <Button
                className="flex h-9 items-center justify-center mt-[156px] rounded-[50%] w-9"
                shape="circle"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                <Img className="h-5" src="images/img_ticket.svg" alt="ticket" />
              </Button>
            </div>
            <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between mt-[-84px] mx-auto w-[95%] z-[1]">
              <div className="bg-white-A700 flex flex-col gap-6 items-center justify-center mb-[268px] p-[18px] rounded-[15px] shadow-bs1 w-[23%] md:w-full">
                <div className="flex flex-col gap-4 items-center justify-start mt-4 w-[87%] md:w-full">
                  <Img
                    className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                    src="images/img_ellipse1015.png"
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
                <div className="flex flex-col items-center justify-start mb-3 w-full">
                  <Text
                    className="leading-[180.00%] text-center text-gray-500 text-sm tracking-[0.14px] w-full"
                    size="txtUrbanistRegular14Gray500"
                  >
                    Dedicated to create amazing for art exhibition information
                    please check link below:
                  </Text>
                  <div className="flex flex-row gap-1.5 items-center justify-start mt-6 w-[83%] md:w-full">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_globe_18X18.svg"
                      alt="globe"
                    />
                    <Text
                      className="text-black-900 text-xs tracking-[0.12px]"
                      size="txtUrbanistRegular12Black900"
                    >
                      weloveart.com/kevincranel
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
                      Edit Profile
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
                    className="mt-[27px] text-gray-500 text-sm tracking-[0.14px]"
                    size="txtUrbanistRegular14Gray500"
                  >
                    Joined November 2021
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[30px] items-center justify-start md:mt-0 mt-[118px] w-3/4 md:w-full">
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
                    className="p-0 placeholder:text-gray-500 text-left text-xs tracking-[0.12px] w-full"
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
                    color="gray_50"
                    size="xs"
                  ></Input>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    <div className="bg-white-A700 flex flex-1 flex-col gap-5 justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[193px] items-end justify-start p-2 rounded-[12px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group33978_7.png')",
                        }}
                      >
                        <div className="flex flex-row gap-2 items-center justify-end mb-[147px] w-[51%] md:w-full">
                          <Button
                            className="cursor-pointer font-medium min-w-[75px] rounded-[14px] text-center text-xs tracking-[0.12px]"
                            color="gray_900_26"
                            size="xs"
                            variant="fill"
                          >
                            Ended
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
                      <div className="flex flex-col items-start justify-start mb-3 ml-2 md:ml-[0]">
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
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-5 justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[193px] items-end justify-start p-2 rounded-[12px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group33978.png')",
                        }}
                      >
                        <div className="flex flex-row gap-2 items-center justify-end mb-[147px] w-[51%] md:w-full">
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
                      <div className="flex flex-col items-start justify-start mb-3 ml-2 md:ml-[0]">
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
                          By Marvin McKinney
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-5 justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[193px] items-end justify-start p-2 rounded-[12px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group33978_8.png')",
                        }}
                      >
                        <div className="flex flex-row gap-2 items-center justify-end mb-[147px] w-[51%] md:w-full">
                          <Button
                            className="cursor-pointer font-medium min-w-[75px] rounded-[14px] text-center text-xs tracking-[0.12px]"
                            color="gray_900_26"
                            size="xs"
                            variant="fill"
                          >
                            Ended
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
                              alt="favorite Two"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-3 ml-2 md:ml-[0]">
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
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-5 justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[193px] items-end justify-start p-2 rounded-[12px] w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_group33978_10.png')",
                        }}
                      >
                        <div className="flex flex-row gap-2 items-center justify-end mb-[147px] w-[51%] md:w-full">
                          <Button
                            className="cursor-pointer font-medium min-w-[75px] rounded-[14px] text-center text-xs tracking-[0.12px]"
                            color="gray_900_26"
                            size="xs"
                            variant="fill"
                          >
                            Ended
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
                              alt="favorite Three"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-3 ml-2 md:ml-[0]">
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
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-5 justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[193px] items-end justify-start p-2 rounded-[12px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group33978_5.png')",
                        }}
                      >
                        <div className="flex flex-row gap-2 items-center justify-end mb-[147px] w-[51%] md:w-full">
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
                              alt="favorite Four"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-3 ml-2 md:ml-[0]">
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
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col gap-5 justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[193px] items-end justify-start p-2 rounded-[12px] w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_group33978_140X240.png')",
                        }}
                      >
                        <div className="flex flex-row gap-2 items-center justify-end mb-[147px] w-[51%] md:w-full">
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
                              alt="favorite Five"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-3 ml-2 md:ml-[0]">
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

export default MyProfilePreviewPage;
