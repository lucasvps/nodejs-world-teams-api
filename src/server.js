import app from "./app.js";

const PORT = process.env.PORT || 3000;

//Listener de rotas
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
