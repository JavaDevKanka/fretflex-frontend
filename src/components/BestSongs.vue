<template>
  <div>
    <p>ЛУЧШЕЕ</p>
    <div class="Posts">
      <div v-if="posts.length > 0">
        <div v-for="(post, index) in posts" :key="index" class="Post">
          <div class="SharpNumber"><i>#{{index+1}}</i></div>
          <img :src="post.songPhoto" :alt="'Изображение песни не загружено!'" />
          <div class="SongName">{{ post.songName }}</div>
          <div class="Author">{{ post.authorPseudonym }}</div>
          <div class="Genre">{{ post.genre }}</div>
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
          "id": 1,
          "songPhoto": "media/images/star_son_image.svg",
          "songName": "ЗВЕЗДА ПО ИМЕНИ СОЛНЦЕ",
          "authorPseudonym": "Кино",
          "genre": "РОК"
        },
        {
          "id": 2,
          "songPhoto": "media/images/ya_tak_soskuchilsya.svg",
          "songName": "Я ТАК СОСКУЧИЛСЯ",
          "authorPseudonym": "Порнофильмы",
          "genre": "РОК"
        },
        {
          "id": 3,
          "songPhoto": "media/images/batareyka.svg",
          "songName": "БАТАРЕЙКА",
          "authorPseudonym": "Жуки","genre": "РОК"
        },
        {
          "id": 4,
          "songPhoto": "media/images/lesnik.svg",
          "songName": "ЛЕСНИК",
          "authorPseudonym": "Король и Шут",
          "genre": "РОК"
        },
        {
          "id": 5,
          "songPhoto": "media/images/poteryanniy_ray.svg",
          "songName": "ПОТЕРЯННЫЙ РАЙ",
          "authorPseudonym": "Ария",
          "genre": "РОК"
        }
      ]
    };
  },
};
</script>

<style scoped>
/* Ваши стили могут быть применены здесь */
</style>
