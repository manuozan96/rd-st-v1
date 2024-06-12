import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-left text-lg text-charcoal font-mobile-h1-mobile-regular ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch flex flex-row items-start justify-between pt-0.5 px-7 pb-0 gap-[20px] border-b-[1px] border-solid border-charcoal">
          <div className="relative uppercase">{`AÑO `}</div>
          <div className="relative uppercase">2023</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between pt-0.5 px-7 pb-0 gap-[20px] border-b-[1px] border-solid border-charcoal mq387:flex-wrap">
          <div className="relative uppercase">LOCACIÓN</div>
          <div className="relative uppercase">
            <span>{`BOGOTÁ, `}</span>
            <i>COLOMBIA</i>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between pt-0.5 px-7 pb-0 gap-[20px] border-b-[1px] border-solid border-charcoal mq352:flex-wrap">
          <div className="relative uppercase">TAMAÑO</div>
          <div className="relative uppercase">340 M2</div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between pt-0.5 px-5 gap-[185px] mq387:flex-wrap">
          <div className="relative uppercase mt-4">ENTREGABLE</div>
          <div className="flex flex-col items-end justify-center ml-5 ">
            <div className="flex flex-row items-center justify-end leading-tight text-right">
              <div className="absolute uppercase leading-tight text-right">
               DISEÑO INTERIOR / Arquitectura<br />
                CONSTRUCCIÓN / MOBILIARIO
              </div>
            </div>
            {/* <div className="flex flex-row items-center justify-end">
              <div className="relative uppercase">
                CONSTRUCCIÓN / MOBILIARIO
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
