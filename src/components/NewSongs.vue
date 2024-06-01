<script xmlns="">
export default {
  data() {
    return {
      newSongs: [
        {
          "songName": "Путь",
          "authorPseudonym": "Иванов",
          "difficultInStars": "3",
          "genre": "ПОСТ-РОК",
          "songPhoto": "path/to/photo1.jpg"
        },
        {
          "songName": "Лето",
          "authorPseudonym": "Петров",
          "difficultInStars": "2",
          "genre": "ПОП",
          "songPhoto": "path/to/photo2.jpg"
        },
        {
          "songName": "Осень",
          "authorPseudonym": "Сидоров",
          "difficultInStars": "4",
          "genre": "БЛЮЗ",
          "songPhoto": "path/to/photo3.jpg"
        },
        {
          "songName": "Зима",
          "authorPseudonym": "Егоров",
          "difficultInStars": "5",
          "genre": "ДЖАЗ",
          "songPhoto": "path/to/photo4.jpg"
        },
        {
          "songName": "Весна",
          "authorPseudonym": "Кузнецов",
          "difficultInStars": "3",
          "genre": "ПОП",
          "songPhoto": "path/to/photo5.jpg"
        },
        {
          "songName": "Рассвет",
          "authorPseudonym": "Михайлов",
          "difficultInStars": "2",
          "genre": "ЭЛЕКТРОНИКА",
          "songPhoto": "path/to/photo6.jpg"
        },
        {
          "songName": "Закат",
          "authorPseudonym": "Алексеев",
          "difficultInStars": "4",
          "genre": "РОК",
          "songPhoto": "path/to/photo7.jpg"
        },
        {
          "songName": "Песня дождя",
          "authorPseudonym": "Андреев",
          "difficultInStars": "3",
          "genre": "БЛЮЗ",
          "songPhoto": "path/to/photo8.jpg"
        },
        {
          "songName": "Солнечный день",
          "authorPseudonym": "Сергеев",
          "difficultInStars": "2",
          "genre": "ПОП",
          "songPhoto": "path/to/photo9.jpg"
        },
        {
          "songName": "Лунная ночь",
          "authorPseudonym": "Николаев",
          "difficultInStars": "4",
          "genre": "ДЖАЗ",
          "songPhoto": "path/to/photo10.jpg"
        },
        {
          "songName": "Танцевальная мелодия",
          "authorPseudonym": "Дмитриев",
          "difficultInStars": "3",
          "genre": "ЭЛЕКТРОНИКА",
          "songPhoto": "path/to/photo11.jpg"
        },
        {
          "songName": "Морская глубина",
          "authorPseudonym": "Борисов",
          "difficultInStars": "5",
          "genre": "ПРОГРЕССИВ-РОК",
          "songPhoto": "path/to/photo12.jpg"
        },
        {
          "songName": "Городские огни",
          "authorPseudonym": "Артемов",
          "difficultInStars": "3",
          "genre": "ЭЛЕКТРОНИКА",
          "songPhoto": "path/to/photo13.jpg"
        },
        {
          "songName": "Звездное небо",
          "authorPseudonym": "Игорев",
          "difficultInStars": "2",
          "genre": "ПОП",
          "songPhoto": "path/to/photo14.jpg"
        },
        {
          "songName": "Полярное сияние",
          "authorPseudonym": "Владимиров",
          "difficultInStars": "4",
          "genre": "ДЖАЗ",
          "songPhoto": "path/to/photo15.jpg"
        }
      ]

    }
  }
}
</script>

<template>
  <div class="new-songs">
    <p>НОВОЕ</p>
    <div class="NewSongsPosts">
      <div class="table">
        <div class="table-header">
          <div class="table-cell">НАЗВАНИЕ</div>
          <div class="table-cell">ИСПОЛНИТЕЛЬ</div>
          <div class="table-cell">СЛОЖНОСТЬ</div>
        </div>
        <div v-for="(song, index) in newSongs" :key="index" class="table-row">
          <div class="table-cell">{{ song.songName }}</div>
          <div class="table-cell">{{ song.authorPseudonym }}</div>
          <div class="table-cell">
            <div class="difficulty">
              <span v-for="star in parseInt(song.difficultInStars)" :key="star" class="star"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.new-songs {
  width: 100%;
  margin-top: 20px;
}

.NewSongsPosts {
  display: flex;
  justify-content: center;
}

.table {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1); /* Границы вокруг всей таблицы */
  border-collapse: collapse;
}

.table-header {
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Границы между заголовками и строками */
}

.table-row {
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Границы между строками */
}

.table-cell {
  flex: 1;
  padding: 10px;
}

.table-cell:first-child {
  flex: 2;
}

.header {
  font-weight: bold;
}

.difficulty {
  display: flex;
  justify-content: center;
}

.star {
  width: 10px;
  height: 10px;
  background-color: rgba(255, 126, 7, 1);
  border-radius: 50%;
  margin: 0 2px;
}
</style>

