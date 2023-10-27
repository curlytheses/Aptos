import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const MessagePage = () => {
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
                  <div className="bg-gray-900_5f flex flex-col font-outfit items-start justify-start p-2.5 rounded-[10px] w-full">
                    <div className="flex flex-row gap-[18px] items-end justify-start ml-1.5 md:ml-[0] w-[47%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user_1.svg"
                        alt="user"
                      />
                      <Text
                        className="mt-[5px] text-gray-900 text-lg tracking-[0.18px]"
                        size="txtOutfitMedium18"
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
                        alt="user One"
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
                        alt="user Two"
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
        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly md:px-5 w-full">
          <div className="md:h-[1074px] h-[1076px] relative w-[34%] md:w-full">
            <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto outline outline-gray-100 p-6 sm:px-5 w-full">
              <Input
                name="SearchInput"
                placeholder="Search chat"
                value={searchinputvalue}
                onChange={(e) => setSearchinputvalue(e)}
                className="p-0 placeholder:text-gray-500 text-left text-sm tracking-[0.14px] w-full"
                wrapClassName="flex mb-[974px] w-[94%]"
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
                color="gray_50"
                size="md"
              ></Input>
            </div>
            <List
              className="absolute bottom-[0] flex flex-col font-urbanist inset-x-[0] items-center mx-auto w-full"
              orientation="vertical"
            >
              <div className="bg-gray-900_67 flex flex-1 flex-col items-center justify-start my-0 p-5 w-full">
                <div className="flex flex-row items-center justify-between w-[93%] md:w-full">
                  <div className="flex flex-row gap-3.5 items-center justify-between w-[48%]">
                    <Img
                      className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                      src="images/img_ellipse1018_7.png"
                      alt="Ellipse1018"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-base text-black-900 tracking-[0.16px]"
                        size="txtUrbanistSemiBold16"
                      >
                        Jenny Wilson
                      </Text>
                      <Text
                        className="mt-1 text-gray-500 text-sm tracking-[0.14px]"
                        size="txtUrbanistMedium14Gray500"
                      >
                        How are you?
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="text-gray-500 text-xs tracking-[0.12px]"
                    size="txtUrbanistMedium12Gray500"
                  >
                    16:00
                  </Text>
                </div>
              </div>
              <Line className="self-center h-[1.5px] bg-gray-100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-3.5 items-start justify-between w-[63%]">
                  <Img
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    src="images/img_ellipse1018_8.png"
                    alt="Ellipse1018 One"
                  />
                  <div className="flex flex-col items-start justify-start mt-0.5">
                    <Text
                      className="text-base text-black-900 tracking-[0.16px]"
                      size="txtUrbanistSemiBold16"
                    >
                      Kristin Watson
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-sm tracking-[0.14px]"
                      size="txtUrbanistMedium14Gray500"
                    >
                      Wow, this is really epic
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-gray-500 text-xs tracking-[0.12px]"
                  size="txtUrbanistMedium12Gray500"
                >
                  18:00
                </Text>
              </div>
              <Line className="self-center h-[1.5px] bg-gray-100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-[63%]">
                  <Img
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    src="images/img_ellipse1018_9.png"
                    alt="Ellipse1018 Two"
                  />
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-base text-black-900 tracking-[0.16px]"
                      size="txtUrbanistSemiBold16"
                    >
                      Darlene Robertson
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-sm tracking-[0.14px]"
                      size="txtUrbanistMedium14Gray500"
                    >
                      Wow, this is really epic
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-gray-500 text-xs tracking-[0.12px]"
                  size="txtUrbanistMedium12Gray500"
                >
                  08:00
                </Text>
              </div>
              <Line className="self-center h-[1.5px] bg-gray-100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-[51%]">
                  <Img
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    src="images/img_ellipse1018_10.png"
                    alt="Ellipse1018 Three"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-black-900 tracking-[0.16px]"
                      size="txtUrbanistSemiBold16"
                    >
                      Arlene McCoy
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-sm tracking-[0.14px]"
                      size="txtUrbanistMedium14Gray500"
                    >
                      perfect!
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-gray-500 text-xs tracking-[0.12px]"
                  size="txtUrbanistMedium12Gray500"
                >
                  11:00
                </Text>
              </div>
              <Line className="self-center h-[1.5px] bg-gray-100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-[59%]">
                  <Img
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    src="images/img_ellipse1018_11.png"
                    alt="Ellipse1018 Four"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-black-900 tracking-[0.16px]"
                      size="txtUrbanistSemiBold16"
                    >
                      Ralph Edwards
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-sm tracking-[0.14px]"
                      size="txtUrbanistMedium14Gray500"
                    >
                      <>I&#39;ll be there in 2 mins</>
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-gray-500 text-xs tracking-[0.12px]"
                  size="txtUrbanistMedium12Gray500"
                >
                  11:30
                </Text>
              </div>
              <Line className="self-center h-[1.5px] bg-gray-100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-[67%]">
                  <Img
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    src="images/img_ellipse1018_12.png"
                    alt="Ellipse1018 Five"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-black-900 tracking-[0.16px]"
                      size="txtUrbanistSemiBold16"
                    >
                      Darrell Steward
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-sm tracking-[0.14px]"
                      size="txtUrbanistMedium14Gray500"
                    >
                      <>Haha that&#39;s terrifying 😂</>
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-gray-500 text-xs tracking-[0.12px]"
                  size="txtUrbanistMedium12Gray500"
                >
                  13:00
                </Text>
              </div>
              <Line className="self-center h-[1.5px] bg-gray-100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-[56%]">
                  <Img
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    src="images/img_ellipse1018_13.png"
                    alt="Ellipse1018 Six"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-black-900 tracking-[0.16px]"
                      size="txtUrbanistSemiBold16"
                    >
                      Kathryn Murphy
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-sm tracking-[0.14px]"
                      size="txtUrbanistMedium14Gray500"
                    >
                      woohoooo
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-gray-500 text-xs tracking-[0.12px]"
                  size="txtUrbanistMedium12Gray500"
                >
                  09:30
                </Text>
              </div>
              <Line className="self-center h-[1.5px] bg-gray-100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-3/5">
                  <Img
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    src="images/img_ellipse1018_14.png"
                    alt="Ellipse1018 Seven"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-black-900 tracking-[0.16px]"
                      size="txtUrbanistSemiBold16"
                    >
                      Eleanor Pena
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-sm tracking-[0.14px]"
                      size="txtUrbanistMedium14Gray500"
                    >
                      omg, this is amazing
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-gray-500 text-xs tracking-[0.12px]"
                  size="txtUrbanistMedium12Gray500"
                >
                  09:00
                </Text>
              </div>
              <Line className="self-center h-[1.5px] bg-gray-100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-[46%]">
                  <Img
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    src="images/img_ellipse1018_15.png"
                    alt="Ellipse1018 Eight"
                  />
                  <div className="flex flex-col gap-[7px] items-start justify-start">
                    <Text
                      className="text-base text-black-900 tracking-[0.16px]"
                      size="txtUrbanistSemiBold16"
                    >
                      Cody Fisher
                    </Text>
                    <Text
                      className="text-gray-500 text-sm tracking-[0.14px]"
                      size="txtUrbanistMedium14Gray500"
                    >
                      aww
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-gray-500 text-xs tracking-[0.12px]"
                  size="txtUrbanistMedium12Gray500"
                >
                  12:00
                </Text>
              </div>
              <Line className="self-center h-[1.5px] bg-gray-100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-1/2">
                  <Img
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    src="images/img_ellipse1018_16.png"
                    alt="Ellipse1018 Nine"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-black-900 tracking-[0.16px]"
                      size="txtUrbanistSemiBold16"
                    >
                      Wade Warren
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-sm tracking-[0.14px]"
                      size="txtUrbanistMedium14Gray500"
                    >
                      Haha oh man
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-gray-500 text-xs tracking-[0.12px]"
                  size="txtUrbanistMedium12Gray500"
                >
                  12:30
                </Text>
              </div>
              <Line className="self-center h-[1.5px] bg-gray-100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-[13px] items-center justify-between w-[65%]">
                  <Img
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    src="images/img_ellipse1018_17.png"
                    alt="Ellipse1018 Ten"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-black-900 tracking-[0.16px]"
                      size="txtUrbanistSemiBold16"
                    >
                      Theresa Webb
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-sm tracking-[0.14px]"
                      size="txtUrbanistMedium14Gray500"
                    >
                      just ideas for next time
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-gray-500 text-xs tracking-[0.12px]"
                  size="txtUrbanistMedium12Gray500"
                >
                  14:00
                </Text>
              </div>
              <Line className="self-center h-[1.5px] bg-gray-100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-[63%]">
                  <Img
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    src="images/img_ellipse1018_18.png"
                    alt="Ellipse1018 Eleven"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-black-900 tracking-[0.16px]"
                      size="txtUrbanistSemiBold16"
                    >
                      Albertus Marque
                    </Text>
                    <Text
                      className="mt-1 text-gray-500 text-sm tracking-[0.14px]"
                      size="txtUrbanistMedium14Gray500"
                    >
                      Hahahaha, Impossible
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-gray-500 text-xs tracking-[0.12px]"
                  size="txtUrbanistMedium12Gray500"
                >
                  14:00
                </Text>
              </div>
            </List>
          </div>
          <div className="bg-gray-50 flex md:flex-1 flex-col font-urbanist items-center justify-start mb-0.5 w-[67%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-start outline outline-gray-100 p-[27px] sm:px-5 w-full">
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[7px]">
                  <Text
                    className="text-black-900 text-lg tracking-[0.18px]"
                    size="txtUrbanistSemiBold18Black900"
                  >
                    Jenny Wilson
                  </Text>
                  <Text
                    className="mt-1 text-green-600 text-sm tracking-[0.14px]"
                    size="txtUrbanistMedium14Green600"
                  >
                    Online
                  </Text>
                </div>
                <Img
                  className="h-6 md:ml-[0] ml-[473px] w-6"
                  src="images/img_search.svg"
                  alt="search"
                />
                <Img
                  className="h-6 ml-5 md:ml-[0] w-6"
                  src="images/img_clock_2.svg"
                  alt="clock Three"
                />
                <Img
                  className="h-6 ml-5 md:ml-[0] w-6"
                  src="images/img_overflowmenu.svg"
                  alt="overflowmenu"
                />
              </div>
              <div className="flex flex-col items-start justify-start mt-[50px] w-[92%] md:w-full">
                <div className="flex flex-col gap-3.5 items-start justify-start w-[56%] md:w-full">
                  <div className="bg-gray-100 border border-gray-300 border-solid flex flex-col items-center justify-start p-2.5 rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <Text
                      className="leading-[180.00%] text-gray-900_ab text-sm tracking-[0.14px]"
                      size="txtUrbanistRegular14Gray900ab"
                    >
                      <>
                        Amateurs think about how much money they can make.
                        <br />
                        Professionals think about how much money they could lose
                      </>
                    </Text>
                  </div>
                  <Text
                    className="text-gray-500 text-xs tracking-[0.12px]"
                    size="txtUrbanistMedium12Gray500"
                  >
                    4:32 Am
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-end justify-start md:ml-[0] ml-[105px] mt-[30px] w-[85%] md:w-full">
                  <div className="bg-gray-900 flex flex-col items-center justify-start p-3.5 rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px] w-full">
                    <Text
                      className="leading-[180.00%] text-sm text-white-A700_ab tracking-[0.14px]"
                      size="txtUrbanistRegular14WhiteA700ab"
                    >
                      <>
                        The price of a commodity will never go to zero. When you
                        invest in commodities futures,
                        <br />
                        you are not buying a piece of paper that says you own an
                        intangible of the company that
                        <br />
                        can go bankrupt 😌.{" "}
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-start justify-end w-[13%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_checkmark_24X24.svg"
                      alt="checkmark"
                    />
                    <Text
                      className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                      size="txtUrbanistMedium12Gray500"
                    >
                      4:10 Am
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-100 border border-gray-300 border-solid flex flex-col items-center justify-start mt-7 p-2.5 rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px]">
                  <Text
                    className="leading-[180.00%] text-gray-900_ab text-sm tracking-[0.14px]"
                    size="txtUrbanistRegular14Gray900ab"
                  >
                    <>
                      Amateurs think about how much money they can make.
                      <br />
                      Professionals think about how much money they could lose
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-3.5 items-start justify-start mt-7 w-[90%] md:w-full">
                  <div className="bg-gray-100 border border-gray-300 border-solid flex flex-col items-center justify-start p-2.5 rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <Text
                      className="leading-[180.00%] text-gray-900_ab text-sm tracking-[0.14px]"
                      size="txtUrbanistRegular14Gray900ab"
                    >
                      <>
                        It&#39;s not always easy to do what&#39;s not popular,
                        but that&#39;s where you make your money.
                        <br />
                        Buy stocks that look bad to less careful investors and
                        hang on until their real value is recognized.
                      </>
                    </Text>
                  </div>
                  <Text
                    className="text-gray-500 text-xs tracking-[0.12px]"
                    size="txtUrbanistMedium12Gray500"
                  >
                    4:26 Am
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-end justify-start md:ml-[0] ml-[87px] mt-[30px] w-[88%] md:w-full">
                  <div className="bg-gray-900 flex flex-col items-center justify-start p-3.5 rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px] w-full">
                    <Text
                      className="leading-[180.00%] text-sm text-white-A700_ab tracking-[0.14px]"
                      size="txtUrbanistRegular14WhiteA700ab"
                    >
                      <>
                        99%+ of traders don&#39;t care about Ferraris and
                        yachts. They just want to pay their bills, save a<br />
                        little extra money, and sleep well at night. The only
                        way to do that is to bat 70% or more.
                        <br />
                        Anything less, and these goals are nothing more than
                        fantasy.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-start justify-end w-[14%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_checkmark_24X24.svg"
                      alt="checkmark One"
                    />
                    <Text
                      className="mt-1 text-gray-500 text-xs tracking-[0.12px]"
                      size="txtUrbanistMedium12Gray500"
                    >
                      5:22 Am
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col font-outfit items-center justify-start mt-[188px] outline outline-gray-100 p-4 w-full">
                <Input
                  name="typingfield"
                  placeholder="Write message"
                  className="p-0 placeholder:text-gray-500 text-left text-sm tracking-[0.14px] w-full"
                  wrapClassName="flex w-[96%]"
                  prefix={
                    <Img
                      className="h-6 ml-3.5 mr-4 my-3"
                      src="images/img_map.svg"
                      alt="map"
                    />
                  }
                  suffix={
                    <Img
                      className="ml-[35px] mr-[22px] my-3"
                      src="images/img_videocamera.svg"
                      alt="video_camera"
                    />
                  }
                  shape="round"
                  color="gray_50"
                  size="sm"
                ></Input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagePage;
