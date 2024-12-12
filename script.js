<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OASIS本店予約希望フォームVER1</title>
  <link rel="stylesheet" href="style.css">
  <script src="https://static.line-scdn.net/liff/edge/versions/2.22.3/sdk.js"></script>
</head>

<body>
  
  <script src="https://static.line-scdn.net/liff/2.1/sdk.js"></script>
  <h1>OASIS<br>予約希望フォーム</h1>
        <!-- 確認エリア -->
        <div id="reservationSummary" style="display: none;">
          <h2>予約内容の確認</h2>
          <pre id="summaryDetails"></pre>
          <button id="editReservation" class="btn">内容を変更</button>
          <button id="confirmReservation" class="btn">予約を確定</button>
        </div>
  <form id="reservationForm">
    <!-- 名前 -->
    <h2 class="title">予約者名</h2>
    <div class="input-wrapper">
      <label for="username" class="input-label">予約者名:</label>
      <input type="text" id="username" name="username" placeholder="オアシス太郎" class="input-field" required><br><br>
    </div>

    <!-- 第1希望 -->
    <h2 class="title">第1希望</h2>
    <div class="date-container">
      <div class="input-wrapper">


      <div class="input-wrapper">
        <label for="day1" class="input-label">日:</label>
        <select id="day1" name="day1" class="input-select" required></select>
      </div>

      <div class="input-wrapper">
        <label for="time1" class="input-label">時間:</label>
        <select id="time1" name="time1" class="input-select" required>
          <!-- 時間の選択肢 -->
          <option value="9:00">9:00</option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
          <option value="16:00">16:00</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
        </select>
      </div>
    </div>

    <!-- 希望2 / 希望3の追加ボタン -->
    <button type="button" id="addSecondChoice">第2希望を追加</button>
    <div id="secondChoice"></div>
    

    

    <button type="button" id="addThirdChoice">第3希望を追加</button>
    <div id="thirdChoice"></div>

    <!-- メニュー -->
    <h2 class="title">メニュー:</h2>
    <div class="input-wrapper">
      <label for="menu" class="input-label">ご希望メニュー</label>
      <textarea id="menu" name="menu" class="input-field" rows="4" placeholder="(例)カットとカラーとトリートメント"></textarea>
    </div>  


   
    <!--スタッフ-->
    <h2 class="title">担当スタイリスト:</h2>
    <div id="stylist-container">
      <!-- 必ずフォームの中か適切な場所にこの要素を追加 -->
    <input type="hidden" id="selectedStylistInput" name="stylist">
    <div class="stylist-card" data-stylist="指名なし">
      <div class="stylist-image">
        <img src="LINE_ALBUM_スタッフ写真_241130_1.jpg" alt="指名なし">

      </div>
      <div class="stylist-info">
        <h3>指名なし</h3>
      
      </div>
    </div>
    <div class="stylist-card" data-stylist="岡崎富之">
        <div class="stylist-image">
          <img src="LINE_ALBUM_スタッフ写真_241130_3.jpg" alt="岡崎富之">
        </div>
        <div class="stylist-info">
          <h3>岡崎富之</h3>
          <p>オーナー</p>
        </div>
      </div>
      <div class="stylist-card" data-stylist="岡崎寿美子">
        <div class="stylist-image">
          <img src="LINE_ALBUM_スタッフ写真_241130_2.jpg" alt="岡崎寿美子">
        </div>
        <div class="stylist-info">
          <h3>岡崎寿美子</h3>
          <p>店長</p>
        </div>
      </div>
    </div>





      <!-- 電話番号 -->
      <h2 class="title">電話番号:</h2>
      <div class="input-wrapper">
        <label for="phoneNumber" class="input-label">電話番号:</label>
        <input type="text" id="phoneNumber" class="input-field" placeholder="例: 090-1234-5678 または 09012345678" required>
      </div>

      <!-- 備考 -->
      <h2 class="title">備考:</h2>
      <div class="input-wrapper">
        <label for="comments" class="input-label">ご要望・コメント:</label>
        <textarea id="comments" name="comments" class="input-field" rows="4" placeholder="ご要望があればご記入ください"></textarea>
      </div>





    <!-- フォーム送信ボタン -->
    <button id="submitReservation" class="btn">送信</button>


  </form>






 
  <script src="script.js"></script>
</body>
</html>
