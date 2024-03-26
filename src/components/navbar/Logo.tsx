import React from "react";
import Image from "next/image";
import stollayLogo from "../../../public/strollay.png";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div>
      <Image src={stollayLogo} alt="stollay-logo" width={150} height={150} />
    </div>
  );
};

export default Logo;
