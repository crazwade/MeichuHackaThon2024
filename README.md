# [2024 梅竹黑客松 創客交流組](https://2024.meichuhackathon.org/)

---

## [Hackmd 規格文件](https://hackmd.io/1iap9gb8SVe7dZ1mxbrRRw?view)

## Build

[![My Skills](https://skillicons.dev/icons?i=ts,vue,vite,tailwindcss,net)](https://skillicons.dev)

## 簡介

為了優化新竹的觀光，首先觀察到在新竹有許多個旅遊相關的資源可以供查詢 [新竹市觀光旅遊網](https://tourism.hccg.gov.tw/) / [新竹縣旅遊網](https://travel.hsinchu.gov.tw/) / [竹塹交通資訊網](https://hisatisfy.hccg.gov.tw/) / [交通部觀光署-新竹](https://www.taiwan.net.tw/m1.aspx?sNo=0001109) 不過過於分散的資料會導致使用者不易查詢，也會間接減少旅遊意願。

所以決定整合一個 All in One 的旅遊導航平台透過

- 整合新竹市政府 opendata 的各種資源：觀光景點、綠地公園、公共廁所、飲水資源等等。
- 透過自訂義地圖來規劃觀光性質的路線地圖
- 提供優於 google map 的功能在導航過程中除了路線提示外還能有“亮點提示”

## 頁面功能

- 首頁

  - [<img src="https://github.com/user-attachments/assets/ba96cfc5-8ad9-4e36-8807-82a5e5ae8f2d" height="300"/>](image.png)
  - 模糊搜尋

- 路徑選擇頁面
  <div style='display: flex;'> 
    <img src="https://github.com/user-attachments/assets/2a0d9d02-fb4b-46a1-bab8-9d018fe0c8df" height="400" alt="crazwade" /> 
    <img src="https://github.com/user-attachments/assets/fbbfc87d-e80f-4abf-9dd6-df705b0324a9" height="400" alt="crazwade" /> 
  </div>
  - 路線選擇
  - 路線詳細資訊：時長、交通總成、路程詳細資訊
  - 地圖

- 導航頁面
  <div style='display: flex;'> 
    <img src="https://github.com/user-attachments/assets/7b4089f1-7293-4eda-98b4-1ee3b248796f" height="400" alt="crazwade" /> 
    <img src="https://github.com/user-attachments/assets/36f03aba-9b9f-4172-a1b6-171b3a0eadb1" height="400" alt="crazwade" /> 
  </div>
  - 路徑完成圓形圖
  - 路線細項資訊：時長、交通種類、目的地、終點
  - 地圖

- 建議頁面
  - [<img src="https://github.com/user-attachments/assets/2dd7a3b5-6e38-4dd4-aaa6-134a25f04ee7" height="300"/>](image.png)
  - 將各種新竹政府 opendata 資源統整
  - 項目選擇：觀光景點、美食、廁所、公園
  - 項目內下：名稱、地址、簡介、按鈕轉向路徑選擇頁面
