function solution(N) {
  let set = Array(N + 1).fill(0);

  function dfs(v) {
    if (v === N + 1) {
      console.log(
        set
          .map((el, index) => {
            if (el == 1) return index;
          })
          .filter((el) => el)
          .join(" ")
      );
      return;
    } else {
      set[v] = 1;
      dfs(v + 1);

      set[v] = 0;
      dfs(v + 1);
    }
  }

  dfs(1);
}
