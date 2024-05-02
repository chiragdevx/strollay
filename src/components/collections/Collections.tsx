import { collectionActions } from "@/store/actions/collection";
import { GetServerSidePropsContext } from "next";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const Collections = () => {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(0);
  const selectedCollectionId = useSelector(
    (state: any) => state.collection.selectedCollectionId,
  );
  const productsByCollection = useSelector(
    (state: any) => state.collection.selectedCollectionProducts,
  );
  console.log("productsByCollection", productsByCollection);
  const collectionData = useSelector((state: any) => state.collection.data);
  const linkArray = collectionData
    .filter((collection: any) => {
      return collection.status === "ACTIVE";
    })
    .map((collection: any) => {
      return {
        title: collection.title,
        id: collection.id,
      };
    });
  useEffect(() => {
    dispatch(collectionActions.getProductsByCollection(selectedCollectionId));
  }, [selectedCollectionId, dispatch]);
  const handleCollectionClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    collectionId: string,
  ) => {
    event.preventDefault();
    setIsSelected(index);
    dispatch(collectionActions.setSelectedCollectionId(collectionId));
  };

  return (
    <div className="flex justify-center mt-10">
      <div
        className="flex overflow-x-auto py-2 space-x-2"
        style={{ height: "50px" }}
      >
        {linkArray.map((collection: any, index: number) => {
          if (index === 0)
            return (
              <div
                key={index}
                className={`flex justify-center border-r-2 border-black px-8 cursor-pointer hover:text-black ${index === isSelected && "text-black"}`}
                onClick={(e) => {
                  handleCollectionClick(e, index, collection.id);
                }}
              >
                {collection.title}
              </div>
            );
          else if (index === linkArray.length - 1)
            return (
              <div
                key={index}
                className={`px-8 cursor-pointer hover:text-black ${index === isSelected && "text-black"}`}
                onClick={(e) => {
                  handleCollectionClick(e, index, collection.id);
                }}
              >
                {collection.title}
              </div>
            );
          else
            return (
              <div
                key={index}
                className={`px-8 border-r-2 border-black cursor-pointer hover:text-black ${index === isSelected && "text-black"}`}
                onClick={(e) => {
                  handleCollectionClick(e, index, collection.id);
                }}
              >
                {collection.title}
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Collections;
