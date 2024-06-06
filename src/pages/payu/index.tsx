import ALink from "@/components/features/CustomLink";
import React from "react";
import Helmet from "react-helmet";

type Props = {};

const index = (props: Props) => {
  return (
    <main>
      <Helmet>
        <title>{`Riode React eCommerce Template | About Us`}</title>
      </Helmet>

      <div className="container">
        <form
          name="payment_post"
          id="payment_post"
          action="https://secure.payu.in/_payment"
          method="post"
        >
          <input hidden type="text" name="key" value="0GuYJH" />
          <input
            hidden
            type="text"
            name="txnid"
            value="d012cdd1-ce2e-4bf2-b43c-867457d69814"
          />
          <input hidden type="text" name="amount" value="1" />
          <input hidden type="text" name="productinfo" value="NULL" />
          <input
            hidden
            type="text"
            name="email"
            value="amanchuriwal22@gmail.com"
          />
          <input hidden type="text" name="phone" value="9016175262" />
          <input
            hidden
            type="text"
            name="surl"
            value="https://one-11-labs.vercel.app/order-success/"
          />
          <input hidden type="text" name="furl" value="undefined" />
          <input
            hidden
            type="text"
            name="firstname"
            value="Pushpal Maheshwari"
          />
          <input hidden type="text" name="udf1" value="1717682069175" />
          <input
            hidden
            type="text"
            name="hash"
            value="3193fdd963b6232e505b065421b08b52117a3b5a9463bc2c17b3846820907485b1e55e1bda1dae7ff0241201886a51f263d9fefdb0bd40d5e589fc49f415e7c3"
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    </main>
  );
};

export default index;
