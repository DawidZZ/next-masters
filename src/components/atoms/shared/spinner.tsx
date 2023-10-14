"use-client";

import { GridLoader } from "@/lib/spinners/spinners";

const Spinner = ({ color }: { color: string }) => {
  return <GridLoader color={color} />;
};

export default Spinner;
