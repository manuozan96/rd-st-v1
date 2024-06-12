import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TtuloType = {
  className?: string;
  home?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propPosition?: CSSProperties["position"];

  /** Action props */
  onTtuloContainer1Click?: () => void;
};

const Ttulo: NextPage<TtuloType> = ({
  className = "",
  home,
  propTop,
  propPosition,
  onTtuloContainer1Click,
}) => {
  const ttuloStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      position: propPosition,
    };
  }, [propTop, propPosition]);

  return (
    <div
      className={`  self-stretch overflow-hidden flex flex-row items-start justify-between pt-[21px] px-7 pb-[19px] top-[0] z-[99]  gap-[20px] text-center text-13xl text-off-white font-desktop-cta border-b-[1px] border-solid border-off-white ${className}`}
      style={ttuloStyle}
      onClick={onTtuloContainer1Click}
    >
      <h2 className="m-0 h-[42px] cursor-pointer relative text-inherit font-medium font-inherit flex items-center justify-center">
        {home}
      </h2>
      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
        <img
          className="w-[34px] h-[34px] relative overflow-hidden shrink-0 object-contain"
          alt=""
          src="/arrow-right@2x.png"
        />
      </div>
    </div>
  );
};

export default Ttulo;
