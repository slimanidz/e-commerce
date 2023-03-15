import Image from "next/image";
import React from "react";
import { useAppContext } from "./componants/Appcontext";
import Header from "./componants/Header";
import Page from "./componants/Page";
import { BsCartDash } from "react-icons/bs";

const Panier = () => {
  const { panier, addPannier, deletePanier, VidePanier } = useAppContext();
  const handleDeletePannier = (event) => {
    const i = Number(event.currentTarget.getAttribute("data-id"));
    deletePanier(i);
  };
  const handleVide = () => {
    VidePanier();
  };

  let count = 0;

  for (let i = 0; i < panier.length; i++) {
    count += panier[i].prix;
  }

  return (
    <Page>
      <div>
        <div className="flex justify-between px-10">
          <h1>
            Votre Panier:{" "}
            <span className="font-bold text-xl ">{panier.length}</span>{" "}
            {panier.length > 1 ? <span>articles</span> : <span>article</span>}
          </h1>
          <button
            className="text-red-700 font-serif hover:scale-110"
            onClick={handleVide}
          >
            vide panier
          </button>
        </div>

        <section className="flex flex-wrap p-5">
          {panier.length === 0 ? (
            <div className="w-full flex justify-center pt-32 font-bold text-3xl">
              Panier vide
            </div>
          ) : null}
          {panier.map((arr, i) => (
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
                <button onClick={handleDeletePannier} data-id={i}>
                  <BsCartDash />
                </button>
              </div>
            </div>
          ))}
        </section>
        {panier.length !== 0 ? (
          <div className="flex flex-col gap-3 items-end p-5">
            <h1 className="">
              Total a payer: <span className="font-bold text-xl">{count}€</span>
            </h1>
            <button className="bg-blue-700 active:bg-blue-400 text-white p-2 rounded font-bold">
              PAYER
            </button>
          </div>
        ) : null}
      </div>
    </Page>
  );
};

export default Panier;
