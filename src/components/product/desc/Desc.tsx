import React from "react";
import { connect } from "react-redux";

import ALink from "@/components/features/CustomLink";
import Accordion from "@/components/features/accordion/accordion";
import Card from "@/components/features/accordion/card";
import BannerOne from "../../../../public/images/Banner10.jpeg";
import size_guide from "../../../../public/images/size_guide.png";

import { modalActions } from "~/store/modal";

import { toDecimal } from "@/utils";
import Image from "next/image";

function Desc(props: any) {
  const { product, adClass = "", openModal } = props;
  let colors = [],
    sizes = [];

  if (product?.variants?.length > 0) {
    if (product.variants[0].size)
      product.variants.forEach((item) => {
        if (sizes.findIndex((size) => size.name === item.size.name) === -1) {
          sizes.push({ name: item.size.name, value: item.size.size });
        }
      });

    if (product.variants[0].color) {
      product.variants.forEach((item) => {
        if (colors.findIndex((color) => color.name === item.color.name) === -1)
          colors.push({ name: item.color.name, value: item.color.color });
      });
    }
  }

  const setRating = (e) => {
    e.preventDefault();

    if (e.currentTarget.parentNode.querySelector(".active")) {
      e.currentTarget.parentNode
        .querySelector(".active")
        .classList.remove("active");
    }

    e.currentTarget.classList.add("active");
  };

  const showVideoModalHandler = (e) => {
    e.preventDefault();
    let link = e.currentTarget.closest(".btn-play").getAttribute("data");
    openModal(link);
  };

  return (
    <div className={`product-details pl-0 ${adClass}`}>
      <Accordion adClass="accordion-simple">
        {/* <Card
          title="Description"
          expanded={true}
          adClass="card-description border-no"
        >
          <div className="row mt-4">
            <div className="mb-4">
              <h5 className="description-title mb-4 font-weight-semi-bold ls-m">
                Features
              </h5>
              <p className="mb-2">
                Praesent id enim sit amet.Tdio vulputate eleifend in in tortor.
                ellus massa. siti iMassa ristique sit amet condim vel, facilisis
                quimequistiqutiqu amet condim Dilisis Facilisis quis sapien.
                Praesent id enim sit amet.
              </p>
              <ul className="mb-8">
                <li>Praesent id enim sit amet.Tdio vulputate</li>
                <li>Eleifend in in tortor. ellus massa.Dristique sitii</li>
                <li>Massa ristique sit amet condim vel</li>
                <li>
                  Dilisis Facilisis quis sapien. Praesent id enim sit amet
                </li>
              </ul>
              <h5 className="description-title mb-3 font-weight-semi-bold ls-m">
                Specifications
              </h5>
              <table className="table">
                <tbody>
                  <tr>
                    <th className="font-weight-semi-bold text-dark pl-0">
                      Material
                    </th>
                    <td className="pl-4">Praesent id enim sit amet.Tdio</td>
                  </tr>
                  <tr>
                    <th className="font-weight-semi-bold text-dark pl-0">
                      Claimed Size
                    </th>
                    <td className="pl-4">Praesent id enim sit</td>
                  </tr>
                  <tr>
                    <th className="font-weight-semi-bold text-dark pl-0">
                      Recommended Use
                    </th>
                    <td className="pl-4">
                      Praesent id enim sit amet.Tdio vulputate eleifend in in
                      tortor. ellus massa. siti
                    </td>
                  </tr>
                  <tr>
                    <th className="font-weight-semi-bold text-dark border-no pl-0">
                      Manufacturer
                    </th>
                    <td className="border-no pl-4">Praesent id enim</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h5 className="description-title font-weight-semi-bold ls-m mb-5">
                Video Description
              </h5>
              <figure className="p-relative d-inline-block mb-3">
                <Image src={BannerOne} width="559" height="370" alt="Product" />

                <a
                  className="btn-play btn-iframe"
                  href="#"
                  data="/uploads/video/video-1.mp4"
                  onClick={showVideoModalHandler}
                >
                  <i className="d-icon-play-solid"></i>
                </a>
              </figure>

              <div className="icon-box-wrap d-flex flex-wrap">
                <div className="icon-box icon-box-side icon-border pt-2 pb-2 mb-4 mr-sm-10 mr-8">
                  <div className="icon-box-icon">
                    <i className="d-icon-lock"></i>
                  </div>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title lh-1 pt-1 ls-s text-normal">
                      2 year warranty
                    </h4>
                    <p>Guarantee with no doubt</p>
                  </div>
                </div>
                <div className="divider d-xl-show mr-10"></div>
                <div className="icon-box icon-box-side icon-border pt-2 pb-2 mb-4">
                  <div className="icon-box-icon">
                    <i className="d-icon-truck"></i>
                  </div>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title lh-1 pt-1 ls-s text-normal">
                      Free shipping
                    </h4>
                    <p>On orders over $50.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card> */}

        <Card title="Additional information" adClass="card-additional">
          <ul>
            <li className="flex justify-start gap-10">
              <label className="min-w-[20rem]">SKU</label>
              <p>GST38041-8703</p>
            </li>
            <li className="flex justify-start gap-10">
              <label className="min-w-[20rem]">Country of Manufacture</label>
              <p>India</p>
            </li>
            <li className="flex justify-start gap-10">
              <label className="min-w-[20rem]">Fabric</label>
              <p> Linen Cotton</p>
            </li>
            <li className="flex justify-start gap-10">
              <label className="min-w-[20rem]">Blouse Fabric</label>
              <p> Linen Cotton </p>
            </li>
            <li className="flex justify-start gap-10">
              <label className="min-w-[20rem]">Blouse Type</label>
              <p>Un-Stitched </p>
            </li>
            <li className="flex justify-start gap-10">
              <label className="min-w-[20rem]">Saree Length</label>
              <p> 5.50 Mtrs</p>
            </li>
            <li className="flex justify-start gap-10">
              <label className="min-w-[20rem]">Blouse Length</label>
              <p> 0.80 Mtrs </p>
            </li>

            {product?.categories.length > 0 ? (
              <li>
                <label>Categories:</label>
                <p>
                  {product.categories.map((item, index) => (
                    <React.Fragment key={item.name + "-" + index}>
                      {item.name}
                      {index < product.categories.length - 1 ? ", " : ""}
                    </React.Fragment>
                  ))}
                </p>
              </li>
            ) : (
              ""
            )}
            {product?.brands.length > 0 ? (
              <li>
                <label>Brands:</label>
                <p>
                  {product.brands.map((item, index) => (
                    <React.Fragment key={item.name + "-" + index}>
                      {item.name}
                      {index < product.brands.length - 1 ? ", " : ""}
                    </React.Fragment>
                  ))}
                </p>
              </li>
            ) : (
              ""
            )}
            {colors.length > 0 ? (
              <li>
                <label>Color:</label>
                <p>
                  {colors.map((item, index) => (
                    <React.Fragment key={item.name + "-" + index}>
                      {item.name}
                      {index < colors.length - 1 ? ", " : ""}
                    </React.Fragment>
                  ))}
                </p>
              </li>
            ) : (
              ""
            )}
            {sizes.length > 0 ? (
              <li>
                <label>Size:</label>
                <p>
                  {sizes.map((item, index) => (
                    <React.Fragment key={item.name + "-" + index}>
                      {item.name}
                      {index < sizes.length - 1 ? ", " : ""}
                    </React.Fragment>
                  ))}
                </p>
              </li>
            ) : (
              ""
            )}
          </ul>
        </Card>

        <Card title={`Dispatch & Delivery Details`} adClass="card-reviews">
          <div>
            After placing an Order, Dispatch Time is usually takes 2-3 Working
            days. Once the Product is Shipped, it is Delivered anywhere in the
            World within 7-9 Working Days.
          </div>
        </Card>

        <Card title="Size Guide" adClass="card-sizeguide">
          <figure className="flex justify-center size-image mb-4">
            <Image
              src={size_guide}
              alt="Size Guide Image"
              width="217"
              loading="lazy"
              height="398"
            />
          </figure>
          <figure className="text-center size-table mt-4 mb-4">
            <table>
              <thead>
                <tr>
                  <th>SIZE</th>
                  <th>CHEST(IN.)</th>
                  <th>WEIST(IN.)</th>
                  <th>HIPS(IN.)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>XS</th>
                  <td>34-36</td>
                  <td>27-29</td>
                  <td>34.5-36.5</td>
                </tr>
                <tr>
                  <th>S</th>
                  <td>36-38</td>
                  <td>29-31</td>
                  <td>36.5-38.5</td>
                </tr>
                <tr>
                  <th>M</th>
                  <td>38-40</td>
                  <td>31-33</td>
                  <td>38.5-40.5</td>
                </tr>
                <tr>
                  <th>L</th>
                  <td>40-42</td>
                  <td>33-36</td>
                  <td>40.5-43.5</td>
                </tr>
                <tr>
                  <th>XL</th>
                  <td>42-45</td>
                  <td>36-40</td>
                  <td>43.5-47.5</td>
                </tr>
                <tr>
                  <th>XXL</th>
                  <td>45-48</td>
                  <td>40-44</td>
                  <td>47.5-51.5</td>
                </tr>
              </tbody>
            </table>
          </figure>
        </Card>
      </Accordion>
    </div>
  );
}

export default Desc;
