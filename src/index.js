import express from 'express';
import { appConfig } from './Config/appConfig.js';
import userRoutes from './Routes/userRoutes.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API funcionando',
    endpoints: {
      users: `${appConfig.apiPrefix}/users`
    }
  });
});

// Manejador de rutas
app.use(`${appConfig.apiPrefix}/users`, userRoutes);

app.listen(appConfig.port, () => {
  console.log(`Servidor en capas activo en http://localhost:${appConfig.port}${appConfig.apiPrefix}/users`);
});
