// router.get('/list', async (req, res, next) => {
//     try {
//       const { id } = req.user;
//       const { search } = req.query;
  
//       const noticias = await noticiasService.get(id, search);
  
//       return res.status(200).json(noticias);
//     } catch (error) {
//       return next(new ApplicationError(error));
//     }
//   });
  
//   router.get('/list/:id', async (req, res, next) => {
//     try {
//       const { id } = req.params;
  
//       const noticia = await noticiasService.getOne(id);
  
//       return res.status(200).json(noticia);
//     } catch (error) {
//       return next(new ApplicationError(error));
//     }
//   });