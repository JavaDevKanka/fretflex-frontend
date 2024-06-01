<template xmlns="">
  <div class="best-songs">
    <p>ЛУЧШЕЕ</p>
      <div class="Posts">
        <div v-if="posts.length > 0" class="split-container">
          <div class="best-post Post">
            <div class="SharpNumber"><i>#1</i></div>
            <img :src="posts[0].songPhoto" :alt="'Изображение песни не загружено!'" />
            <div class="SongName">{{ posts[0].songName }}</div>
            <div class="Author">{{ posts[0].authorPseudonym }}</div>
            <div class="Genre">{{ posts[0].genre }}</div>
          </div>
          <div class="other-posts">
            <div v-for="(post, index) in posts.slice(1)" :key="index" :style="postStyle" class="post Post">
              <div class="SharpNumber"><i>#{{ index + 2 }}</i></div>
              <div class="SongName">{{ post.songName }}</div>
              <div class="Author">{{ post.authorPseudonym }}</div>
              <div class="Genre">{{ post.genre }}</div>
            </div>
          </div>
        </div>
        <p v-else>Загрузка песен...</p>
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
          authorPseudonym: "Кино",
          genre: "РОК"
        },
        {
          id: 2,
          songPhoto: "media/images/ya_tak_soskuchilsya.svg",
          songName: "Я ТАК СОСКУЧИЛСЯ",
          authorPseudonym: "Порнофильмы",
          genre: "РОК"
        },
        {
          id: 3,
          songPhoto: "media/images/batareyka.svg",
          songName: "БАТАРЕЙКА",
          authorPseudonym: "Жуки",
          genre: "РОК"
        },
        {
          id: 4,
          songPhoto: "media/images/lesnik.svg",
          songName: "ЛЕСНИК",
          authorPseudonym: "Король и Шут",
          genre: "РОК"
        },
        {
          id: 5,
          songPhoto: "media/images/poteryanniy_ray.svg",
          songName: "ПОТЕРЯННЫЙ РАЙ",
          authorPseudonym: "Ария",
          genre: "РОК"
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

.best-songs {
  width: 100%;
}

.split-container {
  display: flex;
  width: 100%;
}

.best-post {
  width: 50%;
  padding: 5px;
  box-sizing: border-box;
  position: relative;
  aspect-ratio: 1; /* Делает элемент квадратным */
}

.Post {
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
}

.Post img {
  width: 40%;
  height: auto;
  margin: 0 auto;
}

.SongName {
  padding-bottom: 1%;
  padding-left: 2%;
  align-self: flex-start;
}

.Author {
  padding-bottom: 2%;
  padding-left: 2%;
  align-self: flex-start;
}

.Genre {
  padding-top: 2%;
  padding-left: 2%;
  position: absolute;
  top: 5px;
  left: 5px;
}

.SharpNumber {
  position: absolute;
  top: 5px;
  right: 5px;
  padding-top: 2%;
  padding-right: 2%;
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
}
</style>