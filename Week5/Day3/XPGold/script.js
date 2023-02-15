const urls = [
    'https://www.swapi.tech/api/people/1',
    'https://www.swapi.tech/api/people/2',
    'https://www.swapi.tech/api/people/3',
    'https://www.swapi.tech/api/people/4'
  ]

const promises = urls.map(elt => fetch(elt));

Promise.all(promises).then(
    (results) => {
        results.forEach(res => {
            const r = res.json()
            r.then (res => {
                // console.log(res)
                console.log(res.result.properties.name, res.result.properties.url)
            }
                );
        })
    } 
).catch ( (err) => {console.log(`Smth wrong. The error is ${err}`)})