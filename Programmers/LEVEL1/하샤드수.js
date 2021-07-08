function solution(x) {
    const hashard = String(x).split('').reduce((a,b) => Number(a) + Number(b))
    
    if (x % hashard  === 0) return true;
    else return false;
}