"use client"
import { Button } from "@/components/ui/button";
import React, { useMemo } from "react";
import Loader from "../loader";
import { AutomationDuoToneBlue, AutomationDuoToneWhite } from "@/icons";
import { useCreateAutomation } from "@/hooks/use-automation";
import { v4 } from "uuid";

const CreateAutomation = () => {
  // WIP: Create the automation in the database using mutate
  const mutationId = useMemo(()=>v4() , [])
  const { isPending, mutate } = useCreateAutomation();
  
  
  return (
    
    <Button onClick={()=>mutate({name:"Untitles" , id:mutationId , createdAt:new Date()})} className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352cc] font-medium to-[#1c2d70]">
      <Loader state={isPending}>
        <AutomationDuoToneWhite />
        <p className="lg:inline hidden">Create an Automation</p>
      </Loader>
    </Button>
  );
};

export default CreateAutomation;
