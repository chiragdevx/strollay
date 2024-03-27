import React from "react";
import Image from "next/image";
import strollayLogo from "../../../public/images/strollay.png";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div>
      <Image src={strollayLogo} alt="strollay-logo" width={150} height={150} />
    </div>
  );
};

export default Logo;
