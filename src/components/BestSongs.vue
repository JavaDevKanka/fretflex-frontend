<template xmlns="">
  <div v-if="posts.length > 0" class="split-container">
    <div class="best-post Post">
      <div class="SharpNumber"><i>#1</i></div>
      <div class="image-container">
        <img :src="posts[0].songPhoto" :alt="'Изображение песни не загружено!'" class="centered-image"/>
      </div>
      <div class="SongName">
        <div class="seventeen-font">
          {{ posts[0].songName }}
        </div>
      </div>
      <div class="Author">
        <div class="fourteen-font">
          {{ posts[0].authorPseudonym }}
        </div>
      </div>
      <div class="Genre">
        <div class="seventeen-font">
          {{ posts[0].genre }}
        </div>
      </div>
    </div>
    <div class="other-posts">
      <div v-for="(post, index) in posts.slice(1)" :key="index" :style="postStyle" class="post Post">
        <div class="SharpNumber"><i>#{{ index + 2 }}</i></div>
        <div class="SongName">
          <div class="seventeen-font">
            {{ post.songName }}
          </div>
        </div>
        <div class="Author">
          <div class="fourteen-font">{{ post.authorPseudonym }}</div>
        </div>
        <div class="Genre">
          <div class="seventeen-font">
            {{ post.genre }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <p v-else>Загрузка песен...</p>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          songPhoto: "media/images/zvezda_solnce_cover.svg",
          songName: "ЗВЕЗДА ПО ИМЕНИ СОЛНЦЕ",
          authorPseudonym: "КИНО",
          authorPhoto: "media/images/vitya_image.png",
          genre: "ПОП"
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
          genre: "КЛАССИКА"
        },
        {
          id: 4,
          songPhoto: "media/images/lesnik.svg",
          songName: "ЛЕСНИК",
          authorPseudonym: "КОРОЛЬ И ШУТ",
          genre: "ДЖАЗ"
        },
        {
          id: 5,
          songPhoto: "media/images/poteryanniy_ray.svg",
          songName: "ПОТЕРЯННЫЙ РАЙ",
          authorPseudonym: "АРИЯ",
          genre: "ПОП"
        }
      ]
    };
  },
  computed: {
    postStyle() {
      return {
        height: `calc(100% / ${this.posts.length - 1})`
      };
    }
  }
};
</script>

<style scoped>
/* Прочие стили */

.split-container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.best-post {
  width: 50%;
  padding: 5px;
  box-sizing: border-box;
  position: relative;
  aspect-ratio: 1; /* Делает элемент квадратным */
}

.Post {
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  transition: background-color 0.3s;
}

.Post:hover {
  background-color: rgba(255, 126, 7, 1) /* Оранжевый цвет при наведении */
}

.image-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
  overflow: hidden;
}

.best-post:hover .Genre {
  color: rgba(100, 100, 100, 1);
}

.best-post:hover .Author {
  color: rgba(6, 6, 6, 1);
}

.best-post:hover .SharpNumber {
  color: rgba(6, 6, 6, 1);
}

.other-posts .post:hover .SongName {
  color: rgba(6, 6, 6, 1);
}

.other-posts .post:hover .Genre {
  color: rgba(100, 100, 100, 1);
}

.other-posts .post:hover .Author {
  color: rgba(6, 6, 6, 1);
}

.other-posts .post:hover .SharpNumber {
  color: rgba(6, 6, 6, 1);
}


.best-post:hover .image-container {
  width: 100%;
  padding-top: 100%;
}

.best-post:hover .image-container img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.5);
  border-radius: 50%;
  transition: transform 0.5s ease, border-radius 0.5s ease; /* Добавлены плавные переходы */
}

.best-post .image-container img {
  transition: transform 0.5s ease, border-radius 0.5s ease; /* Добавлен переход для обычного состояния */
}

.best-post:hover .image-container img {
  transform: translate(-50%, -50%) scale(1.5);
  border-radius: 50%;
}

.best-post .image-container img {
  transform: translate(-50%, -50%) scale(1);
  border-radius: 0; /* Исходное состояние для обратного возврата */
}

.Post img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.centered-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.Author {
  padding-bottom: 3%;
  padding-left: 4%;
  align-self: flex-start;
  position: absolute;
  bottom: 5px;
  left: 5px;
  color: rgba(136, 136, 136, 1);
}

.SongName {
  padding-bottom: 4%;
  padding-left: 4%;
  align-self: flex-start;
  position: absolute;
  bottom: 25px;
  left: 5px;
  color: rgba(255, 255, 255, 1);
}

.best-post:hover .SongName {
  color: rgba(6, 6, 6, 1);
}

.Genre {
  padding-top: 4%;
  padding-left: 4%;
  position: absolute;
  top: 5px;
  left: 5px;
  color: rgba(39, 39, 39, 1);
}

.SharpNumber {
  position: absolute;
  top: 5px;
  right: 5px;
  padding-top: 4%;
  padding-right: 4%;
  font-size: 17px;
}

.other-posts {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.other-posts .post {
  padding: 5px;
}

.Post img {
  width: 40%;
  height: auto;
  object-fit: cover;
}

.Post .SharpNumber {
  position: absolute;
  top: 5px;
  right: 5px;
  color: rgba(255, 126, 7, 1);
}

/* Адаптивный дизайн */
@media (max-width: 768px) {
  .best-post, .other-posts .post {
    width: 100%;
  }

  .split-container {
    flex-direction: column;
  }
}
</style>
