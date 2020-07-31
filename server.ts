import { Application, Router} from "https://deno.land/x/oak/mod.ts"
import { getColleges, createColleges , getSingleCollege , deleteColleges, updateColleges} from './routes.ts'

const router = new Router()

router
    .get('/', (ctx)=> {
        ctx.response.body = "Welcome to Colleges API"
    })
    .get('/api/v1/colleges', getColleges)
    .get('/api/v1/colleges/:id', getSingleCollege)
    .post('/api/v1/colleges', createColleges)
    .put('/api/v1/colleges/:id', updateColleges)
    .delete('/api/v1/colleges/:id', deleteColleges)

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

app.listen({port: 8000})
console.log("Server up and running")