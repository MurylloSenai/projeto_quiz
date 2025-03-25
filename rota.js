//Busca perguntas
routes.post('/Bperguntas',async (req, res)=>{

    try{
            const consulta = await sql`SELECT * FROM perguntas ORDER BY RANDOM() LIMIT 1`
            return res.status(200).json(consulta)
    }
    catch(error){
        console.log(error)
        return res.status(500).json('Ocorreu um erro inesperado')
    }
    
});