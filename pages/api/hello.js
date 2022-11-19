// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import DbMenu from '../../components/lib/DbMenu'


export default function handler(req, res) {
  const sqlselect = new DbMenu('select * from t_products');
  commerce = sqlselect.results;


  res.status(200).json({ commerce: commerce })
}
