<template>
  <div>
    <p>ЛУЧШЕЕ</p>
    <div class="Posts">
      <div v-if="posts.length > 0">
        <div v-for="(post, index) in posts" :key="index" class="Post">
          <img :src="post.songImage" :alt="'Изображение песни не загружено!'" />
          <div class="SongName">{{ post.songTitle }}</div>
          <div class="Author">{{ post.groupName }}</div>
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
          "songImage": "media/images/star_son_image.svg",
          "songTitle": "ЗВЕЗДА ПО ИМЕНИ СОЛНЦЕ",
          "groupName": "Кино"
        },
        {
          "id": 2,
          "songImage": "media/images/ya_tak_soskuchilsya.svg",
          "songTitle": "Я ТАК СОСКУЧИЛСЯ",
          "groupName": "Порнофильмы"
        },
        {
          "id": 3,
          "songImage": "media/images/batareyka.svg",
          "songTitle": "БАТАРЕЙКА",
          "groupName": "Жуки"
        },
        {
          "id": 4,
          "songImage": "media/images/lesnik.svg",
          "songTitle": "ЛЕСНИК",
          "groupName": "Король и Шут"
        },
        {
          "id": 5,
          "songImage": "media/images/poteryanniy_ray.svg",
          "songTitle": "ПОТЕРЯННЫЙ РАЙ",
          "groupName": "Ария"
        },
        {
          "id": 6,
          "songImage": "media/images/pachka_sigaret.svg",
          "songTitle": "ПАЧКА СИГАРЕТ",
          "groupName": "Кино"
        },
        {
          "id": 7,
          "songImage": "media/images/sansara.svg",
          "songTitle": "САНСАРА",
          "groupName": "Баста"
        },
        {
          "id": 8,
          "songImage": "media/images/progulki_po_vode.svg",
          "songTitle": "ПРОГУЛКИ ПО ВОДЕ",
          "groupName": "Наутилус Помпилиус"
        },
        {
          "id": 9,
          "songImage": "media/images/fretflex_plus.svg",
          "songTitle": "FRETFLEX PLUS",
          "groupName": "Пробный период (7 дней)"
        }
      ]
    };
  },
};
</script>

<style scoped>
/* Ваши стили могут быть применены здесь */
</style>
