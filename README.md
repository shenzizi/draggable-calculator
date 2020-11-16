Draggable-calculator

### To start
`yarn start`

### To test
`yarn test`

### Demo
deploy on firebase
[draggable-calculator](https://draggable-counter.web.app/)

### Implement:
- 依照附檔的spec
- 除加減外,也有乘除功能, 點擊AC可reset
- 錯誤的expression不顯示計算結果
- 計算機不能完全超出邊界
- config內含有keyboard以及theme的設定,若需調整可直接修改config
- 使用React memo + useCallback 避免不必要的渲染
- 有簡單的測試
  
### Todo list:
- calculate: 若用`=` evaluate後,可再執行其他運算
- 防止更多錯誤的expression, e.g. 重複的0(005)/6*%...
- keyboard點擊時會同時trigger拖拉功能,可再修正
- 計算機popup出來時可做動畫,使畫面較流暢


