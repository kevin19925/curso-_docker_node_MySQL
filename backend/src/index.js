const express = require('express');
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('API backend funcionando  kevin quishpe  hghgjghj 19fdggdf9 25');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});