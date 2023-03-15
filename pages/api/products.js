// import hashPassword from "../../src/hashPassword";
import Product from "../../src/api/db/models/Product";

const productsRoutes = async (req, res) => {
  // if (!auth(req, res)) {
  //   return
  // }
  console.log(123);

  if (req.method === "GET") {
    const products = await Product.query();
    // const products = await db("products");

    if (!products) {
      res.status(404).send({ error: "Erreur. Aucun résultat." });

      return;
    }

    res.status(200).send({ result: products });
  }

  if (req.method === "POST") {
    const {
      body: { name, description, prix },
    } = req;
    const product = await Product.query()
      .insert({
        name,
        description,
        prix,
      })
      .returning("*");

    res.status(200).send({ result: product });
  }
};

export default productsRoutes;
