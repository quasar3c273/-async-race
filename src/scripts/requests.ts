import fetch from "node-fetch";

const baseURL = "http://127.0.0.1:3000";
const endpoints = {
  garage: "/garage",
  engine: "/engine",
  winners: "/winners",
};

const getCars = async () => {
  const response = await fetch(`${baseURL}${endpoints.garage}`);
  return await response.json();
};

getCars().then((res) => console.log(res));
