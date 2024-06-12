import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Ttulo from "../components/ttulo";

const Root: NextPage = () => {
  const router = useRouter();

  const onTtuloContainer1Click = useCallback(() => {
    router.push("/root");
  }, [router]);

  return (
    <div className="w-[430px] relative flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="h-[932px] flex-1 bg-off-white  flex flex-col items-end justify-start pt-[59px] px-0 pb-[626px] box-border relative gap-[56px] max-w-full mq414:h-auto mq428:pt-5 mq428:pb-28 mq428:box-border ">
        //esta imagen es el fondo
        <img
          className="w-full h-[2923px] absolute !m-[0] right-[0px] bottom-[-1991px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover "
          alt=""
          src="/frame-290@2x.png"
        />
        <section className="flex flex-row items-start justify-start pt-0 pb-[89px]  pr-0 pl-5">
          <div className="h-px w-px relative shrink-0 [debug_commit:69da668]  z-[1]">
            <div className="absolute top-[calc(50%_+_0.5px)] left-[calc(50%_+_0.5px)] bg-rojo w-full h-full [transform:_rotate(180deg)] [transform-origin:0_0]" />
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[59px] box-border max-w-full text-center text-lg text-rojo font-desktop-cta ">
          <div className="flex-1 flex flex-col items-start justify-start py-0 px-14 box-border gap-[16px] shrink-0 [debug_commit:69da668] max-w-full z-[1] ">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[54px] mq318:pl-5 mq318:pr-5 mq318:box-border">
              <div className="relative leading-[130.4%] uppercase font-medium">
                {`Restaurantes & Cafés`}
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-[29px] gap-[22px] mq414:flex-wrap">
              <div className="relative leading-[130.4%] uppercase font-medium">
                Bares
              </div>
              <div className="w-[78px] relative leading-[130.4%] uppercase font-medium inline-block">
                HOTELES
              </div>
              <div className="w-[82px] relative leading-[130.4%] uppercase font-medium inline-block">
                OFICINAS
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[22px] mq413:flex-wrap">
              <div className="relative leading-[130.4%] uppercase font-medium">{`COMERCIAL & RETAIL`}</div>
              <div className="relative leading-[130.4%] uppercase font-medium">
                RESIDENCIAL
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch h-[1884px] shrink-0 flex flex-col items-start justify-start py-0 px-7 box-border gap-[28px] [debug_commit:69da668] max-w-full z-[1] text-left text-5xl text-off-white font-desktop-cta">
          <div className="self-stretch flex-1 flex flex-row items-end justify-start p-7 box-border gap-[16px] bg-[url('/image-7@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
            <img
              className="h-[450px] flex-1 relative max-w-full overflow-hidden object-cover hidden"
              alt=""
              src="/image-7@2x.png"
            />
            <div className="h-[62px] w-[276px] relative tracking-[0.2em] uppercase inline-block shrink-0 z-[1]">
              Brigada Training Lab
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-end justify-start p-7 relative gap-[16px]">
            <img
              className="self-stretch flex-1 absolute !m-[0] h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/image-7@2x.png"
            />
            <div className="h-[62px] w-[273px] relative tracking-[0.2em] uppercase inline-block shrink-0 z-[1]">
              Love chicharrón
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-end justify-start p-7 box-border gap-[16px] bg-[url('/image-7@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
            <img
              className="h-[450px] flex-1 relative max-w-full overflow-hidden object-cover hidden"
              alt=""
              src="/image-7@2x.png"
            />
            <div className="h-[62px] w-[236px] relative tracking-[0.2em] uppercase inline-block shrink-0 z-[1]">
              NIMI´S SHAWARMA
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-end justify-start p-7 relative gap-[16px]">
            <img
              className="self-stretch flex-1 absolute !m-[0] h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image-7-1@2x.png"
            />
            <div className="h-[31px] relative tracking-[0.2em] uppercase inline-block z-[1]">
              KOD BURGUER
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-col items-start justify-start gap-[115px] shrink-0 [debug_commit:69da668] max-w-full text-center text-5xl text-rojo font-desktop-cta">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-7 box-border max-w-full ">
            <div className="flex-1 box-border flex flex-row items-start justify-start pt-3.5 pb-[15px] pr-[17px] pl-[19px] relative max-w-full z-[1] border-[1px] border-solid border-rojo hover:bg-rojo hover:text-off-white hover:transition .15s cursor-pointer">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] " />
              <div className="h-[31px] flex-1 relative font-medium flex items-center justify-center max-w-full z-[1] e">
                Cargar más
              </div>
            </div>
          </div>
          <div className="self-stretch bg-rojo flex flex-col items-start justify-start py-[115px] px-0 box-border relative gap-[56px] max-w-full z-[1] text-left text-lg text-off-white">
            <div className="w-px h-px absolute !m-[0] top-[154px] right-[-1px] bg-rojo [transform:_rotate(180deg)] [transform-origin:0_0]" />
            <div className="w-[303px] flex flex-row items-start justify-start py-0 px-10 box-border">
              <p className="m-0 h-[138px] flex-1 relative inline-block">
                <span className="font-light">{`Lorem ipsum dolor sit amet, `}</span>
                <span className="font-semibold">
                  consectetur adipiscing elit
                </span>
                <span className="font-light">{`, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</span>
              </p>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start cursor-pointer">
              <Ttulo home="Home" />
              <Ttulo
                home="Proyectos"
                propTop="unset"
                propPosition="unset"
                onTtuloContainer1Click={onTtuloContainer1Click}
              />
              <Ttulo home="Nosotros" propTop="unset" propPosition="unset" />
              <Ttulo home="Contacto" propTop="unset" propPosition="unset" />
            </div>
            <footer className="self-stretch flex flex-row items-start justify-start py-0 px-7 box-border max-w-full text-left text-lg text-off-white font-desktop-cta">
              <div className="flex-1 flex flex-col items-start justify-start gap-[17px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <p className="m-0 self-stretch h-[46px] relative inline-block">
                    <span className="block">
                      <span className="font-light">Oficina México</span>
                    </span>
                    <span className="block">
                      <span>(+57) (1)  813 48 36</span>
                    </span>
                  </p>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative uppercase font-light whitespace-nowrap hover:underline hover:cursor-pointer">
                      info@reinharddienes.com
                    </div>
                    <img className="w-[3.6px] h-0 relative" alt="" />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative uppercase font-light">
                      CARRERA 7 #73-55
                    </div>
                    <img className="w-[3.6px] h-0 relative" alt="" />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="h-[46px] relative inline-block">
                    <p className="m-0 font-light">Oficina Colombia</p>
                    <p className="m-0">(+57) (1)  813 48 36</p>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative uppercase font-light whitespace-nowrap hover:underline hover:cursor-pointer">
                      info@reinharddienes.com
                    </div>
                    <img className="w-[3.6px] h-0 relative" alt="" />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative uppercase font-light">
                      CARRERA 7 #73-55
                    </div>
                    <img className="w-[3.6px] h-0 relative" alt="" />
                  </div>
                </div>
              </div>
            </footer>
            <div className="w-[190px] flex flex-row items-start justify-start py-0 px-7 box-border">
              <div className="flex-1 flex flex-row items-start justify-between gap-[20px] ">
                <img
                  className="h-[30px] w-[30px] cursor-pointer relative min-h-[30px]"
                  alt=""
                  src="/-icon-facebook-squared.svg"
                />
                <img
                  className="h-[30px] w-[30px] cursor-pointer relative min-h-[30px]"
                  alt=""
                  src="/-icon-instagram.svg"
                />
                <img
                  className="h-[30px] w-[30px] cursor-pointer relative rounded-[10px] overflow-hidden shrink-0 min-h-[30px]"
                  alt=""
                  src="/social-icons.svg"
                />
              </div>
            </div>
          </div>
        </section>
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full shrink-0 object-cover z-[2]"
          alt=""
          src="/frame-184@2x.png"
        />
      </main>
    </div>
  );
};

export default Root;
