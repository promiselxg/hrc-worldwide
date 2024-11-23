import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Event1 from "../../assets/images/event/event1.png";
import Event2 from "../../assets/images/event/event2.png";
import Event3 from "../../assets/images/event/event3.png";
import { Button } from "../ui/button";

export function EventSlider() {
  return (
    <>
      <div className="flex w-full text-[--text-black]">
        <div className="container mx-auto">
          <div className="p-[50px] flex justify-center flex-col gap-4">
            <h1 className="mb-5 font-gothic font-[400] text-[30px] md:text-[50px] flex justify-center">
              Experience God with us through OUR UPCOMING Events.
            </h1>
            <Carousel className="container mx-auto md:w-[1200px]">
              <CarouselContent className="-ml-1">
                <CarouselItem className="pl-1 md:basis-[100%] lg:basis-1/3">
                  <div className="p-1">
                    <img src={Event1} alt="image" />
                  </div>
                </CarouselItem>
                <CarouselItem className="pl-1 md:basis-[100%] lg:basis-1/3">
                  <div className="p-1">
                    <img src={Event2} alt="image" />
                  </div>
                </CarouselItem>
                <CarouselItem className="pl-1 md:basis-[100%] lg:basis-1/3">
                  <div className="p-1">
                    <img src={Event3} alt="image" />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="flex justify-center mt-3">
              <Button className="bg-[rgba(0,0,0,0.8)] text-[#ccc] rounded-full w-fit text-[12px] font-[400] font-lato">
                View all event
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
