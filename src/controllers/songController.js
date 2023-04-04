import Song from "../models/Song";
import User from "../models/User";
import cheerio from "cheerio";
import request from "request";

export const home = async (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};
