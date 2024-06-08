<template>
  <div class="popular-genres">
    <div class="BestGenresPosts">
      <div v-if="genres.length > 0" class="split-container">
        <div
            class="popular-genre GenrePost"
            @mouseover="hoverGenre = genres[0]"
            @mouseleave="hoverGenre = null"
            :class="{ 'hovered': hoverGenre === genres[0] }"
        >
          <div class="CountOfGenres" :class="{ 'hovered': hoverGenre === genres[0] }">
            <i>({{ genres[0].subgenre.length }})</i>
          </div>
          <img
              :src="genres[0].genrePhoto"
              :alt="'Популярные жанры не загружены!'"
              class="centered-image first-image"
          />
          <div class="GenreName" :class="{ 'hidden': hoverGenre === genres[0] }">
            <div class="seventeen-font">
              <a :href="'/здесь будут ссылки'">{{ genres[0].genreCategory }}</a>
            </div>
          </div>
          <div v-if="hoverGenre === genres[0]" class="Subgenres">
            <div v-for="subgenre in genres[0].subgenre" :key="subgenre">
              <a :href="'/здесь будут ссылки'">{{ subgenre }}</a>
            </div>
          </div>
        </div>
        <div class="other-genre-posts">
          <div
              v-for="(genre, index) in genres.slice(1, 4)"
              :key="index"
              class="post GenrePost"
              @mouseover="hoverGenre = genre"
              @mouseleave="hoverGenre = null"
              :class="{ 'hovered': hoverGenre === genre }"
          >
            <div class="CountOfGenres" :class="{ 'hovered': hoverGenre === genre }">
              <i>({{ genre.subgenre.length }})</i>
            </div>
            <div class="GenreName" :class="{ 'hidden': hoverGenre === genre }">
              <div class="seventeen-font">
                <a :href="'/здесь будут ссылки'">{{ genre.genreCategory }}</a>
              </div>
            </div>
            <div v-if="hoverGenre === genre" class="Subgenres">
              <div v-for="subgenre in genre.subgenre" :key="subgenre">
                <a :href="'/здесь будут ссылки'">{{ subgenre }}</a>
              </div>
            </div>
          </div>
          <div class="post GenrePost" style="position: relative;">
            <QuarterSquare/>
            <div class="arrow-container">
              <div class="arrow-icon">
                <img src="@/assets/icons/svg/orange_arrow.svg" alt="Стрелка"/>
              </div>
            </div>
            <div class="OtherGenres">
              <div class="seventeen-font">
                <a :href="'/здесь будут ссылки'">ВСЕ ЖАНРЫ</a>
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
import QuarterSquare from '@/components/QuarterSquare.vue'; // Импортируйте компонент

export default {
  components: {
    QuarterSquare, // Регистрируйте компонент для использования
  },
  data() {
    return {
      hoverGenre: null,
      genres: [
        {
          genreCategory: 'РОК',
          genrePhoto: '/media/images/mockPhotos/rock_genre.svg',
          subgenre: [
            'ПОСТ-РОК',
            'ПОСТ-ПАНК',
            'ПРОГРЕССИВ-РОК',
            'ПАНК-РОК',
            'МЕТАЛ',
            'ИНДИ',
            'АЛЬТЕРНАТИВА',
            'РОК-Н-РОЛЛ',
            'РОК',
          ],
        },
        {
          genreCategory: 'ПОП',
          genrePhoto: 'path/to/photo2.jpg',
          subgenre: ['ДИСКО', 'ЭЛЕКТРО-ПОП', 'ПОП'],
        },
        {
          genreCategory: 'СОУЛ И ФАНК',
          genrePhoto: 'path/to/photo3.jpg',
          subgenre: ['СОУЛ', 'ФАНК'],
        },
        {
          genreCategory: 'КЛАССИКА',
          genrePhoto: 'path/to/photo4.jpg',
          subgenre: ['ОПЕРА', 'КАМЕРНАЯ МУЗЫКА', 'СИМФОНИЯ', 'АКАДЕМИЧЕСКАЯ МУЗЫКА'],
        },
        {
          genreCategory: 'ДЖАЗ И БЛЮЗ',
          genrePhoto: 'path/to/photo5.jpg',
          subgenre: ['ДЖАЗ', 'БЛЮЗ'],
        },
      ],
    };
  },
};
</script>


<style scoped>

.GenreName a, .Subgenres a, .OtherGenres a {
  text-decoration: none;
  color: inherit;
}

.Subgenres a:hover {
  padding-left: 5px; /* Или другое значение, на ваш выбор */
  transform: translateY(-1px);
}



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
  transition: background-color 0.3s, color 0.3s;
}

.GenrePost:hover {
  background-color: rgba(255, 126, 7, 1);
}

.GenrePost:hover .GenreName, .GenrePost:hover .Subgenres {
  color: black;
}

.GenrePost:hover .CountOfGenres {
  color: black;
}

.GenrePost:hover .seventeen-font {
  color: black;
}

.GenrePost:hover img.first-image {
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0.9);
}

.centered-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s, border-radius 0.3s;
}

.GenreName {
  padding-bottom: 4%;
  padding-left: 4%;
  align-self: flex-start;
  position: absolute;
  bottom: 25px;
  left: 5px;
  color: rgba(255, 255, 255, 1);
  transition: color 0.3s;
}

.GenreName.hidden {
  display: none;
}

.OtherGenres {
  padding-bottom: 4%;
  padding-left: 4%;
  align-self: flex-start;
  position: absolute;
  bottom: 25px;
  left: 5px;
  color: rgba(255, 126, 7, 1);
  transition: color 0.3s;
}


.QuarterSquare:hover ~ .OtherGenres {
  color: black;
}

.arrow-container {
  position: absolute;
  padding-right: 4%;
  align-self: flex-end;
  bottom: 4%;
  width: 50px;
  height: 50px;
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
  color: grey;
  transition: color 0.3s;
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
  color: grey;
}

@media (max-width: 768px) {
  .popular-genre,
  .other-genre-posts {
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
  padding-bottom: 4%;
  padding-left: 4%;
  align-self: flex-start;
  position: absolute;
  bottom: 25px;
  left: 5px;
  color: white;
  font-size: 17px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: color 0.3s, transform 0.3s;
  transform: translateY(20px);
  opacity: 0;
}

.GenrePost:hover .Subgenres {
  transform: translateY(0);
  opacity: 1;
}
</style>

