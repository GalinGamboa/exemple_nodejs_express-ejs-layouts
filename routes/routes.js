import express from 'express';
export const router = new express.Router()

router.get('/',async (req,res)=>{
    const locals = {
        title: 'home',
        description: 'Page home de la app'
    }
await res.render('home',locals)
})

router.get('/about',async (req,res)=>{
    const locals = {
        title: 'about',
        description: 'Page about de la app'
    }
    await res.render('about',locals)
})

router.get('/contact',async (req,res)=>{
    const locals = {
        title: 'contact',
        description: 'Page contact de la app'
    }
    await res.render('contact',locals)
})