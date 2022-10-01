function solution(sizes) {
    const w = sizes.map(el => el[0]);
    const h = sizes.map(el => el[1]);
    let tmp = 0;
     
     for (let i = 0; i < sizes.length; i++) {
         if (w[i] < h[i]) {
             tmp = w[i];
             w[i] = h[i];
             h[i] = tmp;
         }
     }
     
     return Math.max(...w) * Math.max(...h);
 }

 function solution(sizes) {
    const arr = sizes.map(el => {
       return el.sort((a, b) => b - a)
    })
    
    const w = Math.max(...arr.map(el => {
        return el[0];
    }));
     const h = Math.max(...arr.map(el => {
        return el[1];
    }));
    
    return w * h;
    
 }

 function solution(sizes) {
    const w = sizes.map(size => Math.max(...size));
    const h = sizes.map(size => Math.min(...size));
    
    return Math.max(...w) * Math.max(...h);
 }