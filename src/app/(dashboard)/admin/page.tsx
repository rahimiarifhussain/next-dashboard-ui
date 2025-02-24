import UserCard from "@/components/UserCard"
import React from 'react'

const Page = () => {
  return (
    <div className="p-4 flex flex-col gap-4 md:flex-row">
      {/* LEFT  */}
      <div className="w-full lg:w-2/3">
        {/* UserCard */}
        <div className="flex gap-2">
          <UserCard  type="student"/>
          <UserCard  type="teacher"/>
          <UserCard  type="parent"/>
          <UserCard  type="staff"/>
        </div>
      </div>

      {/* Right */}
      <div className=" w-full lg:w-1/3">Right</div>
    </div>
  );
}

export default Page