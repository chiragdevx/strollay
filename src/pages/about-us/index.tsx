import ALink from "@/components/features/CustomLink";
import React from "react";
import Helmet from "react-helmet";

type Props = {};

const index = (props: Props) => {
  return (
    <main>
      <Helmet>
        <title>{`"Riode React eCommerce Template | About Us"`}</title>
      </Helmet>

      <nav className="breadcrumb-nav">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <ALink href="/">
                <i className="d-icon-home"></i>
              </ALink>
            </li>
            <li>{`"About Us"`}</li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <h3>{`"ABOUT US"`}</h3>
        <p>{`"Hello !"`}</p>{" "}
        <p>{`"Thanks for dropping by. Here’s a little bit about us."`}</p>
        <h4>{`"Know Us:"`} </h4>
        <p>
          {`" Strollay® is an indian online ethnic shopping website headquartered
          in Surat, the commercial capital of the state of Gujarat. Strollay.com
          aims to be become one of the largest online retailers of Indian ethnic
          wear giving the Indian & foreign consumers (NRIs and Non-Indians) the
          taste of Indian ethnic wear."`}
        </p>
        <p>
          {`"Strollay® is an ethnic brand that offers merchandise in the space of
          fashion and lifestyle. We aim to provide best-in-class shopping
          experience to you by way of stunning visual content, unexpected
          customer service, customisation facility, constantly building on trust
          and dependability, and offering best of the premium and luxury Indian
          ethnic products across the world. Down the line, when you think of
          fashion, we hope you think of Strollay® !!"`}{" "}
        </p>{" "}
        <h4>{`"Our Philosophy:"`}</h4>{" "}
        <p>
          {`"Our business philosophy is based on KICC (Keep It Consumer Centric).
          Do what it takes to give consumer the "Hassle-free Shopping
          Experience", they'll never forget."`}
        </p>{" "}
        <h4>{`"What We Do:"`}</h4>
        <p>
          {" "}
          {`"We wish to offer our customers quality products, and our list of
          product categories and product offerings is growing every day. Our
          customers know they're getting the best prices and exclusive offers on
          a huge range of products in women's ethnic wear, Indian sarees, salwar
          suits, kurtis/tunics, lehengas, and more adding to our range
          day-by-day. At Strollay®, our focus has always been on helping
          customers save time and money. This is why we've invested in building
          a website that allows them to securely manage their accounts without
          intervention."`}
        </p>{" "}
        <p>{`" We’re constantly working towards making Strollay®:"`}</p>
        <ul>
          <li>{`"Easy To Browse Products"`}</li>
          <li> {`"Easy To Discover"`}</li>
          <li>
            {" "}
            {`"Our Express delivery services are sure to pleasantly surprise you."`}
          </li>
        </ul>
        <h4> {`"About the Founder:"`}</h4>
        <h6>
          {`" Rahul Chhajer (Founder & Director Merchandising, Creative Content &
          Operations)"`}
        </h6>{" "}
        <ul>
          <li>
            {`"Rahul is responsible for the overall strategy of Strollay®, as well
            as its day-to-day operations."`}
          </li>
          <li>
            {`"the love and passion for technology led him to start Strollay®,
            which has become a renowned ethnic brand across the world especially
            in the West and Asia pacific region. The demand for Indian ethnic
            outfits is increasing day-by-day, and Surat, being famous for these
            products, helped him concentrate and focus on these. So, the idea
            basically was to supply Indian ethnic outfits worldwide,
            economically and fast. Rahul is an alumnus of St. Xavier's
            College-Calcutta, and after having attended Indian institute of
            management-Indore, Strollay® was incepted in march 2012. Rahul is
            an avid reader of non-fiction & fiction and enjoys the outdoors. He
            also loves to travel, meet new people and be exposed to new
            cultures."`}
          </li>
        </ul>
      </div>
    </main>
  );
};

export default index;
