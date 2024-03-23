"use client";

import React from "react";
import { Room } from "./Room";
import Live from "../../../components/cursor/live";
import FootballField from "../../../components/footballField";

import TeamOptions from "../../../components/formationSelect";

const page = ({ params }: { params: { playgroundID: string } }) => {
  return (
   
      <div className="flex">
        {/* <Live /> */}
      </div>
   
  );
};

export default page;
