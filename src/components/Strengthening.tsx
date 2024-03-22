import Image from "next/image";
import React from "react";

const Strengthening = () => {
  return (
    <div className="bg-[#0b1729] h-full lg:h-screen">
      <div className="text-[#FAF9F6] lg:max-w-[1500px] mx-auto">
        <div className={"text-white text-4xl font-bold"}>
          Strengthening Distributed Storage
        </div>
        <p className="text-gray-400 max-w-[900px] text-2xl  mt-5">
          Various foreverbox Nodes make up the decentralised and distributed
          blockchain-based storage network. The manner that individuals save,
          trade and authenticate valuable data will gradually change thanks to
          foreverbox.
        </p>
        <div className="lg:flex gap-y-10 justify-between mt-8">
          {/* Left */}
          <div className="">
            <div className="flex gap-8">
              {/* 1 */}
              <div className=" mt-24 w-[352px] rounded">
                <div className="">
                  <Image src="/pic1.jpeg" alt="img" width={350} height={200} />
                </div>
                <div className="w-[350px] bg-[#142a4a] p-4 rounded">
                  <h1 className="font-bold">Encryption</h1>
                  <p className="text-gray-400">
                    Before being uploaded to the network, data is encrypted.
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className="  h-[284px] w-[352px] rounded">
                <div className="">
                  <Image src="/pic2.jpeg" alt="img" width={350} height={200} />
                </div>
                <div className="w-[350px] bg-[#142a4a] p-4 rounded">
                  <h1 className="font-bold">Encryption</h1>
                  <p className="text-gray-400">
                    Before being uploaded to the network, data is encrypted.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-8  mt-10">
              {/* 3 */}
              <div className="w-[352px] rounded">
                <div className="">
                  <Image src="/pic1.jpeg" alt="img" width={350} height={200} />
                </div>
                <div className="w-[350px] bg-[#142a4a] p-4 rounded">
                  <h1 className="font-bold">Encryption</h1>
                  <p className="text-gray-400">
                    Before being uploaded to the network, data is encrypted.
                  </p>
                </div>
              </div>
              {/* 4 */}
              <div className="w-[352px] rounded">
                <div className="">
                  <Image src="/pic2.jpeg" alt="img" width={350} height={200} />
                </div>
                <div className="w-[350px] bg-[#142a4a] p-4 rounded">
                  <h1 className="font-bold">Encryption</h1>
                  <p className="text-gray-400">
                    Before being uploaded to the network, data is encrypted.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="rounded ">
            <Image src="/crp.jpeg" alt="img" width={600} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strengthening;
