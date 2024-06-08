<template>
  <div class="popular-genres">
    <div class="BestGenresPosts">
      <div v-if="genres.length > 0" class="split-container">
        <div class="popular-genre GenrePost" @mouseover="hoverGenre = genres[0]" @mouseleave="hoverGenre = null">
          <div class="CountOfGenres"><i>(1)</i></div>
          <img :src="genres[0].genrePhoto" :alt="'Популярные жанры не загружены!'" class="centered-image"/>
          <div class="GenreName">
            <div class="seventeen-font">
              {{ genres[0].genreCategory }}
            </div>
          </div>
          <div v-if="hoverGenre === genres[0]" class="Subgenres">
            <div v-for="subgenre in genres[0].subgenre" :key="subgenre">{{ subgenre }}</div>
          </div>
        </div>
        <div class="other-genre-posts">
          <div v-for="(genre, index) in genres.slice(1, 4)" :key="index" class="post GenrePost" @mouseover="hoverGenre = genre" @mouseleave="hoverGenre = null">
            <div class="CountOfGenres"><i>({{ index + 2 }})</i></div>
            <img :src="genre.genrePhoto" :alt="'Популярные жанры не загружены!'" class="centered-image"/>
            <div class="GenreName">
              <div class="seventeen-font">
                {{ genre.genreCategory }}
              </div>
            </div>
            <div v-if="hoverGenre === genre" class="Subgenres">
              <div v-for="subgenre in genre.subgenre" :key="subgenre">{{ subgenre }}</div>
            </div>
          </div>
          <div class="post GenrePost" style="position: relative;">
            <img src="@/assets/icons/svg/OtherGenresButton.svg" alt="Пятая иконка" class="centered-image"/>
            <div class="arrow-container">
              <div class="arrow-icon">
                <img src="@/assets/icons/svg/orange_arrow.svg" alt="Стрелка"/>
              </div>
            </div>
            <div class="OtherGenres">
              <div class="seventeen-font">
                ВСЕ ЖАНРЫ
              </div>
            </div>
          </div>
        </div>
      </div>
      <p v-else>Загрузка жанров...</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hoverGenre: null,
      genres: [
        {
          "genreCategory": "РОК",
          "genrePhoto": "path/to/photo1.jpg",
          "subgenre": [
            "ПОСТ-РОК",
            "ПОСТ-ПАНК",
            "ПРОГРЕССИВ-РОК",
            "ПАНК-РОК",
            "МЕТАЛ",
            "ИНДИ",
            "АЛЬТЕРНАТИВА",
            "РОК-Н-РОЛЛ",
            "РОК"
          ]
        },
        {
          "genreCategory": "ПОП",
          "genrePhoto": "path/to/photo2.jpg",
          "subgenre": [
            "ДИСКО",
            "ЭЛЕКТРО-ПОП",
            "ПОП"
          ]
        },
        {
          "genreCategory": "СОУЛ И ФАНК",
          "genrePhoto": "path/to/photo3.jpg",
          "subgenre": [
            "СОУЛ",
            "ФАНК"
          ]
        },
        {
          "genreCategory": "КЛАССИКА",
          "genrePhoto": "path/to/photo4.jpg",
          "subgenre": [
            "ОПЕРА",
            "КАМЕРНАЯ МУЗЫКА",
            "СИМФОНИЯ",
            "АКАДЕМИЧЕСКАЯ МУЗЫКА"
          ]
        },
        {
          "genreCategory": "ДЖАЗ И БЛЮЗ",
          "genrePhoto": "path/to/photo5.jpg",
          "subgenre": [
            "ДЖАЗ",
            "БЛЮЗ"
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
.popular-genres {
  width: 100%;
}

.split-container {
  display: flex;
  width: 100%;
}

.popular-genre {
  width: 50%;
  padding: 5px;
  box-sizing: border-box;
  position: relative;
  aspect-ratio: 1;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.GenrePost {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
}

.centered-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.GenreName {
  padding-bottom: 4%;
  padding-left: 4%;
  align-self: flex-start;
  position: absolute;
  bottom: 25px;
  left: 5px;
  color: rgba(255, 255, 255, 1);
}

.OtherGenres {
  padding-bottom: 4%;
  padding-left: 4%;
  align-self: flex-start;
  position: absolute;
  bottom: 25px;
  left: 5px;
  color: rgba(255, 126, 7, 1);
}

.arrow-container {
  position: absolute;
  padding-right: 4%;
  align-self: flex-end;
  bottom: 4%;
  width: 50px; /* Ширина контейнера равна размеру стрелки */
  height: 50px; /* Высота контейнера равна размеру стрелки */
}

.arrow-icon {
  width: 100%;
  height: 100%;
}

.arrow-icon img {
  width: 100%;
  height: 100%;
}

.CountOfGenres {
  position: absolute;
  top: 5px;
  right: 5px;
  padding-top: 4%;
  padding-right: 4%;
  font-size: 17px;
}

.other-genre-posts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0;
  width: 50%;
  padding: 0;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.other-genre-posts .post {
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
}

.GenrePost img {
  width: 40%;
  height: auto;
  object-fit: cover;
}

.GenrePost .CountOfGenres {
  position: absolute;
  top: 5px;
  right: 5px;
  color: rgba(136, 136, 136, 1);
}

@media (max-width: 768px) {
  .popular-genre, .other-genre-posts {
    width: 100%;
  }

  .split-container {
    flex-direction: column;
  }

  .other-genre-posts {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}

.Subgenres {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  padding: 10px;
  box-sizing: border-box;
}
</style>
