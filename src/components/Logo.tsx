import React from 'react';
const Logo = () => {
  return <div className="flex items-center gap-2">
      <div className="h-12 w-12 rounded-md bg-primary flex items-center justify-center backdrop-blur-[4px] backdrop-saturate-[100%] bg-[#ffffff] bg-opacity-10 border border-opacity-20 border-[#ffffff]">
        <div className="h-4 w-4 rounded-sm bg-primary-foreground backdrop-blur-[4px] backdrop-saturate-[100%] bg-[#ffffff] bg-opacity-10 border border-opacity-20 border-[#ffffff]"></div>
      </div>
    </div>;
};
export default Logo;