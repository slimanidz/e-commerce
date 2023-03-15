import "dotenv/config";
import knexfile from "../../knexfile";
// import knexfile from "@/../knexfile";

const config = {
  db: knexfile,
  security: {
    session: {
      jwtSecret: process.env.JWT_SECRET,
      expiresIn: "2 day",
    },
  },
  // services: {
  //   leboncitoyen: {
  //     baseUrl: process.env.LEBONCITOYEN_BASE_URL,
  //   },
  // },
};

export default config;
