req.query 

products.filter(elt => elt.name.includes(req.query.q));
resp.json()