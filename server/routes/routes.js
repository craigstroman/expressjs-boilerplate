import { Router } from 'express';

const router = new Router();

router.route('/').get((req, res) => {
  res.render('index', {
    title: req.app.locals.title,
    path: req.path,
  });
});

router.route('/api/').get((req, res) => {
  res.json({
    'response': 'Example API response'
  });
});

export default router;
