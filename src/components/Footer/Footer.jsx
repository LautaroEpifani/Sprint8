import React from 'react'

const Footer = () => {
  return (
    <div className=" p-20 bg-black text-slate-400">
        <p className="font-semibold">More from Star Wars</p>
        <div className="">
            <ul className="flex justify-between w-1/3 xl:w-1/6 mt-10 mb-28 text-center mx-auto">
              <li>
                <img src={`imgLan/face.png`} alt="" width={30} />
              </li>
              <li>
                <img src={`imgLan/ins.png`} alt="" width={30} />
              </li>
              <li>
                <img src={`imgLan/yt.png`} alt="" width={30} />
              </li>
              <li>
                <img src={`imgLan/tw.png`} alt="" width={30} />
              </li>
            </ul>
          </div>
          <p className="mb-4 font-bold">TM & © Lucasfilm Ltd. All Rights Reserved</p>
          <p>Terms of Use  | 
            Additional Content Information  | 
            Privacy Policy  | 
            Children's Online Privacy Policy  | 
            Your California Privacy Rights  | 
            Star Wars at shopDisney  | 
            Star Wars Helpdesk  | 
            Interest-Based Ads  | 
            Do Not Sell My Personal Information 
          </p>
    </div>
  )
}

export default Footer