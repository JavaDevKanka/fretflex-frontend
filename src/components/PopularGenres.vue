<template>
  <div class="popular-genres">
    <p>ПОПУЛЯРНЫЕ ЖАНРЫ</p>
    <div class="BestGenresPosts">
      <div v-if="posts.length > 0" class="split-container">
        <div class="popular-genre GenrePost">
          <div class="CountOfGenres"><i>(1)</i></div>
          <img :src="posts[0].songPhoto" :alt="'Популярные жанры не загружены!'" class="centered-image"/>
          <div class="GenreName">
            <div class="seventeen-font">
              {{ posts[0].songName }}
            </div>
          </div>
        </div>
        <div class="other-genre-posts">
          <div v-for="(post, index) in posts.slice(1, 4)" :key="index" class="post GenrePost">
            <div class="CountOfGenres"><i>({{ index + 2 }})</i></div>
            <img :src="post.songPhoto" :alt="'Популярные жанры не загружены!'" class="centered-image"/>
            <div class="GenreName">
              <div class="seventeen-font">
                {{ post.songName }}
              </div>
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
      posts: [
        {
          id: 1,
          songPhoto: "media/images/star_son_image.svg",
          songName: "ЗВЕЗДА ПО ИМЕНИ СОЛНЦЕ",
          authorPseudonym: "КИНО",
          genre: "РОК"
        },
        {
          id: 2,
          songPhoto: "media/images/ya_tak_soskuchilsya.svg",
          songName: "Я ТАК СОСКУЧИЛСЯ",
          authorPseudonym: "ПОРНОФИЛЬМЫ",
          genre: "РОК"
        },
        {
          id: 3,
          songPhoto: "media/images/batareyka.svg",
          songName: "БАТАРЕЙКА",
          authorPseudonym: "ЖУКИ",
          genre: "РОК"
        },
        {
          id: 4,
          songPhoto: "media/images/lesnik.svg",
          songName: "ЛЕСНИК",
          authorPseudonym: "КОРОЛЬ И ШУТ",
          genre: "РОК"
        },
        {
          id: 5,
          songPhoto: "media/images/poteryanniy_ray.svg",
          songName: "ПОТЕРЯННЫЙ РАЙ",
          authorPseudonym: "АРИЯ",
          genre: "РОК"
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
  left: 5px; /* Расположение слева */
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
</style>
