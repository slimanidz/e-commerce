import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useAppContext } from "./componants/Appcontext";
import Header from "./componants/Header";
import Page from "./componants/Page";
import { BsCartPlus } from "react-icons/bs";
import Link from "next/link";
import api from "../services/api";

const Index = () => {
  const { panier, addPannier, products } = useAppContext();
  const [disable, setdisable] = useState(false);
  const array = [
    { categiry: "cosmetique", image: "a curl can dream", prix: 5.56 },
    { categiry: "alimentation", image: "bicoope", prix: 2.99 },
    { categiry: "alimentation", image: "champignon", prix: 3 },
    { categiry: "cosmetique", image: "deva corl", prix: 8.99 },
    { categiry: "telephone", image: "doro 2404", prix: 25 },
    { categiry: "alimentation", image: "fromage blanc", prix: 3.68 },
    { categiry: "telephone", image: "galaxy a12", prix: 350 },
    { categiry: "cosmetique", image: "gel moussant", prix: 4.75 },
    { categiry: "telephone", image: "iphone 13", prix: 999 },
    { categiry: "alimentation", image: "jus oranges bio", prix: 2.45 },
    { categiry: "alimentation", image: "kiri", prix: 2.23 },
    { categiry: "alimentation", image: "lait actel", prix: 1.28 },
    { categiry: "vesselle", image: "noir profond", prix: 15 },
    { categiry: "vesselle", image: "perle noire", prix: 17 },
    { categiry: "alimentation", image: "pur jus", prix: 3.25 },
    { categiry: "vesselle", image: "savon noir", prix: 8.39 },
    { categiry: "alimentation", image: "snickers", prix: 2 },
    { categiry: "decoration", image: "vase 12s", prix: 38.5 },
    { categiry: "vesselle", image: "violette sauvage", prix: 12 },
    { categiry: "telephone", image: "xiaomi redmi note 10", prix: 340 },
  ];
  const handleAddPannier = async (event) => {
    const i = Number(event.currentTarget.getAttribute("data-id"));
    await addPannier(array[i]);
  };

  const handleAdd = useCallback(async (event) => {
    const id = Number(event.currentTarget.getAttribute("data-id"));
    console.log(id);
    const {
      data: { result },
    } = await api.get(`/api/products/${id}`);
    console.log(result);
  }, []);

  return (
    <Page>
      <div className="bg-red-60">
        <div className="flex flex-wrap gap-5 p-5">
          {" "}
          {products.map((product) => (
            <div key={product.id} className="w-32 md:w-48 rounded ">
              <p className="truncate">{product.name}</p>
              <div className="h-42 md:h-64 ">
                <Image
                  src={`/produits/${product.name}.png`}
                  width={100}
                  height={100}
                  alt="hallo"
                  className="w-32 h-32 md:w-48 md:h-48 rounded"
                />
                <div className="flex justify-between py-2">
                  <p>{product.prix}€</p>
                  <button onClick={handleAdd} data-id={product.id}>
                    Add
                  </button>
                </div>
              </div>

              <p className="text-center bg-slate-200 truncate ">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        <section className="flex flex-wrap p-5">
          {array.map((arr, i) => (
            <div key={i} className="p-5">
              <button className="  hover:scale-110  duration-200">
                <h1>{arr.image}</h1>
                <Image
                  src={`/produits/${arr.image}.png`}
                  width={100}
                  height={100}
                  alt="hallo"
                  className="w-32 h-32 rounded"
                />
              </button>
              <div className="flex justify-between">
                <p className="p-2">{arr.prix}€</p>
                <button
                  // disabled
                  // className={disable ? "hidden" : null}
                  onClick={handleAddPannier}
                  data-id={i}
                >
                  <BsCartPlus />
                </button>
              </div>
            </div>
          ))}
        </section>

        <Link href="add-products">products</Link>
      </div>
    </Page>
  );
};

export default Index;
