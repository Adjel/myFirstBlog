import React from "react";
import { COLORS } from "../../Constants";

function Divider() {
  return (
    <hr style={{ borderTop: `0.5px solid ${COLORS.Gray.buttonLightGray}` }} />
  );
}

export default Divider;
