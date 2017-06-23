const Koa=require('koa');
const router=require('koa-router')();
const app=new Koa();
const taEngine=require('./engine/engine');
const path=require('path');

const e=new taEngine({

path:__dirname+'/views'

});

e.use(app);

router.get('/api',async (ctx,next)=>{
	ctx.render('index',{name:"kevin",apellido:"mendoza"});
})
.post('/api',async(ctx,next)=>{
	console.log(ctx.request.body);
})

app.use(router.routes());
app.use(router.allowedMethods());
app.use(async(ctx)=>{
	ctx.body="No se encontro sorry";
})

app.listen(3000,()=>console.log("Corriendo app"));

