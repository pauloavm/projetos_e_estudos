import { useState } from "react";

const useCountdown = (date) => {
  const countDate = new Date(date).getTime();

  console.log(countDate);

  return 1;
};

export default useCountdown;
