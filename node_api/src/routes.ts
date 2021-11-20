import { Router } from 'express'


const routes = Router();


routes.post('/funcionarios')

routes.post('/epi')

routes.post('/entregaepi')
routes.get('/entregaepi/:id')
routes.put('/entregaepi/:id')
routes.delete('/entregaepi/:id')

export { routes }

