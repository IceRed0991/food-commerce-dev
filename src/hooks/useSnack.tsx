import { useContext } from "react";

import { SnackContext } from "../contexts/SnackContext";

export default function useSnack() {
  return useContext(SnackContext)
}
