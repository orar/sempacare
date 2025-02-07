import React from 'react';
import {MedicalStaffing, NursingRecruitment, PrivateNursing} from "@/components/corporate";

// private nursing
// medical staffing
// nursing recruitment
const Page = () => {
  return (
   <>
     <PrivateNursing />
     <MedicalStaffing />
     <NursingRecruitment />
   </>
  );
};

export default Page;
