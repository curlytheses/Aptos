import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="bg-gray-50 border-gray-100 border-r-[1.5px] border-solid flex flex-col gap-[50px] items-start justify-start py-[34px] w-full">
          <div className="flex flex-row gap-3.5 items-center justify-start md:ml-[0] ml-[34px] w-[59%] md:w-full">
            <Img
              className="h-14 md:h-auto rounded-[50%] w-14"
              src="images/img_ellipse1015.png"
              alt="Ellipse1015"
            />
            <div className="flex flex-col gap-[9px] items-start justify-start">
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
          <div className="flex flex-col gap-[31px] items-center justify-start w-full">
            <div className="flex flex-col gap-[15px] justify-start w-full">
              <Text
                className="md:ml-[0] ml-[34px] text-gray-901 text-xs tracking-[0.12px]"
                size="txtUrbanistMedium12Gray901"
              >
                GENERAL
              </Text>
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <div className="flex flex-row gap-[18px] items-center justify-start p-2.5 w-full">
                  <Img
                    className="h-6 ml-6 w-6"
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
                <div className="flex flex-row gap-[18px] items-center justify-start p-2.5 w-full">
                  <Img
                    className="h-6 ml-6 w-6"
                    src="defaultNoData.png"
                    alt="message"
                  />
                  <Text
                    className="text-gray-500 text-lg tracking-[0.18px]"
                    size="txtUrbanistMedium18"
                  >
                    Message
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-center justify-start p-2.5 w-full">
                  <Img
                    className="h-6 ml-6 w-6"
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
            <div className="flex flex-col gap-[15px] justify-start w-full">
              <Text
                className="md:ml-[0] ml-[34px] text-gray-901 text-xs tracking-[0.12px]"
                size="txtUrbanistMedium12Gray901"
              >
                MARKETPLACE
              </Text>
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <div className="flex flex-row gap-[18px] items-center justify-start p-2.5 w-full">
                  <Img
                    className="h-6 ml-6 w-6"
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
                <div className="flex flex-row gap-[18px] items-center justify-start p-2.5 w-full">
                  <Img
                    className="h-6 ml-6 w-6"
                    src="images/img_link.svg"
                    alt="link"
                  />
                  <Text
                    className="text-gray-500 text-lg tracking-[0.18px]"
                    size="txtUrbanistMedium18"
                  >
                    Active Bid
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-center justify-start p-2.5 w-full">
                  <Img
                    className="h-6 ml-6 w-6"
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
            <div className="flex flex-col gap-[15px] justify-start w-full">
              <Text
                className="md:ml-[0] ml-[34px] text-gray-901 text-xs tracking-[0.12px]"
                size="txtUrbanistMedium12Gray901"
              >
                MY PROFILE
              </Text>
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <div className="flex flex-row gap-[18px] items-center justify-start p-2.5 w-full">
                  <Img
                    className="h-6 ml-6 w-6"
                    src="images/img_settings_24X24.svg"
                    alt="settings Two"
                  />
                  <Text
                    className="text-gray-500 text-lg tracking-[0.18px]"
                    size="txtUrbanistMedium18"
                  >
                    Collection
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-center justify-start p-2.5 w-full">
                  <Img
                    className="h-6 ml-6 w-6"
                    src="images/img_car.svg"
                    alt="car"
                  />
                  <Text
                    className="text-gray-500 text-lg tracking-[0.18px]"
                    size="txtUrbanistMedium18"
                  >
                    Wallet
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-center justify-start p-2.5 w-full">
                  <Img
                    className="h-6 ml-6 w-6"
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
          <div className="md:h-[231px] h-[258px] md:ml-[0] ml-[34px] relative w-[78%]">
            <div className="absolute bg-gray-900 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-3.5 rounded-[15px] w-[234px]">
              <Text
                className="mt-[29px] text-lg text-white-A700 tracking-[0.18px]"
                size="txtUrbanistSemiBold18"
              >
                Help Center
              </Text>
              <Text
                className="leading-[180.00%] mt-[18px] text-center text-gray-400 text-sm tracking-[0.14px] w-[81%] sm:w-full"
                size="txtUrbanistRegular14"
              >
                <>
                  Having trouble in Enefti?
                  <br />
                  Please contact us for more question
                </>
              </Text>
              <Button
                className="cursor-pointer font-medium font-urbanist min-w-[206px] mt-[34px] text-center text-sm tracking-[0.14px]"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                Go To Help Center
              </Button>
            </div>
            <Button
              className="absolute flex h-[50px] inset-x-[0] items-center justify-center mx-auto shadow-bs top-[0] w-[50px]"
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
          </div>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
