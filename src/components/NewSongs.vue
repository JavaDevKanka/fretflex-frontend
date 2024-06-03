<template>
  <div class="new-songs">
    <div class="NewSongsPosts">
      <div class="table">
        <div class="table-header">
          <div class="table-cell">
            <div class="fourteen-font">
              Название
            </div>
          </div>
          <div class="table-cell">
            <div class="fourteen-font">
              Исполнитель
            </div>
          </div>
          <div class="table-cell">
            <div class="fourteen-font">
              Сложность
            </div>
          </div>
        </div>
        <div v-for="(song, index) in newSongs" :key="index" class="table-row">
          <div class="table-cell">
            <div class="seventeen-font">
              {{ song.songName }}
            </div>
          </div>
          <div class="table-cell">
            <div class="seventeen-font">
              {{ song.authorPseudonym }}
            </div>
          </div>
          <div class="table-cell">
            <div class="difficulty">
              <span v-for="star in 5" :key="star"
                    :class="{'star': true, 'orange-star': star <= parseInt(song.difficultInStars), 'gray-star': star > parseInt(song.difficultInStars)}"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script xmlns="">
export default {
  data() {
    return {
      newSongs: [
        {
          "songName": "ПУТЬ",
          "authorPseudonym": "ИВАНОВ",
          "difficultInStars": "3",
          "genre": "ПОСТ-РОК",
          "songPhoto": "path/to/photo1.jpg"
        },
        {
          "songName": "ЛЕТО",
          "authorPseudonym": "ПЕТРОВ",
          "difficultInStars": "2",
          "genre": "ПОП",
          "songPhoto": "path/to/photo2.jpg"
        },
        {
          "songName": "ОСЕНЬ",
          "authorPseudonym": "СИДОРОВ",
          "difficultInStars": "4",
          "genre": "БЛЮЗ",
          "songPhoto": "path/to/photo3.jpg"
        },
        {
          "songName": "ЗИМА",
          "authorPseudonym": "ЕГОРОВ",
          "difficultInStars": "5",
          "genre": "ДЖАЗ",
          "songPhoto": "path/to/photo4.jpg"
        },
        {
          "songName": "ВЕСНА",
          "authorPseudonym": "КУЗНЕЦОВ",
          "difficultInStars": "3",
          "genre": "ПОП",
          "songPhoto": "path/to/photo5.jpg"
        },
        {
          "songName": "РАССВЕТ",
          "authorPseudonym": "МИХАЙЛОВ",
          "difficultInStars": "2",
          "genre": "ЭЛЕКТРОНИКА",
          "songPhoto": "path/to/photo6.jpg"
        },
        {
          "songName": "ЗАКАТ",
          "authorPseudonym": "АЛЕКСЕЕВ",
          "difficultInStars": "4",
          "genre": "РОК",
          "songPhoto": "path/to/photo7.jpg"
        },
        {
          "songName": "ПЕСНЯ ДОЖДЯ",
          "authorPseudonym": "АНДРЕЕВ",
          "difficultInStars": "3",
          "genre": "БЛЮЗ",
          "songPhoto": "path/to/photo8.jpg"
        },
        {
          "songName": "СОЛНЕЧНЫЙ ДЕНЬ",
          "authorPseudonym": "СЕРГЕЕВ",
          "difficultInStars": "2",
          "genre": "ПОП",
          "songPhoto": "path/to/photo9.jpg"
        },
        {
          "songName": "ЛУННАЯ НОЧЬ",
          "authorPseudonym": "НИКОЛАЕВ",
          "difficultInStars": "4",
          "genre": "ДЖАЗ",
          "songPhoto": "path/to/photo10.jpg"
        },
        {
          "songName": "ТАНЦЕВАЛЬНАЯ МЕЛОДИЯ",
          "authorPseudonym": "ДМИТРИЕВ",
          "difficultInStars": "3",
          "genre": "ЭЛЕКТРОНИКА",
          "songPhoto": "path/to/photo11.jpg"
        },
        {
          "songName": "МОРСКАЯ ГЛУБИНА",
          "authorPseudonym": "БОРИСОВ",
          "difficultInStars": "5",
          "genre": "ПРОГРЕССИВ-РОК",
          "songPhoto": "path/to/photo12.jpg"
        },
        {
          "songName": "ГОРОДСКИЕ ОГНИ",
          "authorPseudonym": "АРТЕМОВ",
          "difficultInStars": "3",
          "genre": "ЭЛЕКТРОНИКА",
          "songPhoto": "path/to/photo13.jpg"
        },
        {
          "songName": "ЗВЕЗДНОЕ НЕБО",
          "authorPseudonym": "ИГОРЕВ",
          "difficultInStars": "2",
          "genre": "ПОП",
          "songPhoto": "path/to/photo14.jpg"
        },
        {
          "songName": "ПОЛЯРНОЕ СИЯНИЕ",
          "authorPseudonym": "ВЛАДИМИРОВ",
          "difficultInStars": "4",
          "genre": "ДЖАЗ",
          "songPhoto": "path/to/photo15.jpg"
        }
      ]


    }
  }
}
</script>


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
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: none;
  border-collapse: collapse;
}

.table-header {
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.table-header > .table-cell {
  border-bottom: none;
}

.table-row {
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.table-cell {
  padding: 20px;
  text-align: left;
}

.table-cell:nth-child(1),
.table-cell:nth-child(2) {
  width: 20%;
}

.table-cell:nth-child(3) {
  text-align: right;
  width: 60%;
}

.difficulty {
  display: flex;
  justify-content: flex-end;
}

.star {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 2px;
}

.orange-star {
  background-color: rgba(255, 126, 7, 1);
}

.gray-star {
  background-color: rgba(136, 136, 136, 1);
}

.fourteen-font {
  color: rgba(136, 136, 136, 1);
}

.seventeen-font {
  font-size: 17px;
}
</style>


