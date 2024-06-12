<template>
  <div class="popular-authors">
    <div class="bestAuthorsPosts">
      <div v-if="authors.length > 0" class="author-container">
        <div
            v-for="(author, index) in authors.slice(0, maxVisibleAuthors)"
            :key="index"
            class="author-post"
            @mouseover="hoverAuthor = author"
            @mouseleave="hoverAuthor = null"
            :class="{ 'hovered': hoverAuthor === author }"
        >
          <div class="author-square">
            <img :src="author.authorPhoto" :alt="'Популярные авторы не загружены!'" class="centered-image" />
            <div class="author-name" :class="{ 'hidden': hoverAuthor === author }">
              <div class="seventeen-font">{{ author.authorPseudonym }}</div>
              <div class="description">{{ author.description }}</div>
            </div>
            <div v-if="hoverAuthor === author" class="author-details">
              <div class="rating">#{{ author.authorRating }}</div>
            </div>
          </div>
        </div>
        <div class="author-post all-authors">
          <QuarterSquare/>
          <div class="arrow-container">
            <div class="arrow-icon">
              <img src="@/assets/icons/svg/orange_arrow.svg" alt="Стрелка"/>
            </div>
          </div>
          <div class="other-authors">
            <div class="seventeen-font">ВСЕ ИСПОЛНИТЕЛИ</div>
          </div>
        </div>
      </div>
      <p v-else>Загрузка авторов...</p>
    </div>
  </div>
</template>

<script>
import QuarterSquare from '@/components/QuarterSquare.vue';

export default {
  components: {
    QuarterSquare,
  },
  data() {
    return {
      maxVisibleAuthors: 7,
      hoverAuthor: null,
      authors: [
        {
          authorPseudonym: 'somePseudonym1',
          authorPhoto: '/media/images/mockPhotos/basta_artist.jpg',
          authorRating: 1,
          description: 'Описание автора 1',
        },
        {
          authorPseudonym: 'somePseudonym2',
          authorPhoto: '/media/images/mockPhotos/tsoy_artist.jpg',
          authorRating: 2,
          description: 'Описание автора 2',
        },
        {
          authorPseudonym: 'somePseudonym3',
          authorPhoto: '/media/images/mockPhotos/tsoy_artist.jpg',
          authorRating: 3,
          description: 'Описание автора 3',
        },
        {
          authorPseudonym: 'somePseudonym4',
          authorPhoto: '/media/images/mockPhotos/tsoy_artist.jpg',
          authorRating: 4,
          description: 'Описание автора 4',
        },
        {
          authorPseudonym: 'somePseudonym5',
          authorPhoto: '/media/images/mockPhotos/basta_artist.jpg',
          authorRating: 5,
          description: 'Описание автора 5',
        },
        {
          authorPseudonym: 'somePseudonym6',
          authorPhoto: '/media/images/mockPhotos/tsoy_artist.jpg',
          authorRating: 6,
          description: 'Описание автора 6',
        },
        {
          authorPseudonym: 'somePseudonym7',
          authorPhoto: '/media/images/mockPhotos/tsoy_artist.jpg',
          authorRating: 7,
          description: 'Описание автора 7',
        },
        {
          authorPseudonym: 'somePseudonym8',
          authorPhoto: '/media/images/mockPhotos/tsoy_artist.jpg',
          authorRating: 8,
          description: 'Описание автора 8',
        },
      ],
    };
  },
};
</script>

<style scoped>
.popular-authors {
  width: 100%;
}

.bestAuthorsPosts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.author-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0;
  width: 100%;
  box-sizing: border-box;
}

.author-post {
  position: relative;
  aspect-ratio: 1;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s, color 0.3s;
}

.author-post:hover {
  background-color: rgba(255, 126, 7, 1);
}

.author-post:hover .author-name,
.author-post:hover .author-details {
  color: black;
}

.author-post:hover .rating {
  color: black;
}

.author-post:hover .seventeen-font {
  color: black;
}

.centered-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s, border-radius 0.3s;
}

.author-name {
  padding-bottom: 4%;
  padding-left: 4%;
  align-self: flex-start;
  position: absolute;
  bottom: 25px;
  left: 5px;
  color: rgba(255, 255, 255, 1);
  transition: color 0.3s;
}

.author-name.hidden {
  display: none;
}

.all-authors {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
}

.other-authors {
  padding-bottom: 4%;
  padding-left: 4%;
  align-self: flex-start;
  position: absolute;
  bottom: 25px;
  left: 5px;
  color: rgba(255, 126, 7, 1);
  transition: color 0.3s;
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

.author-details {
  padding: 10px;
  color: white;
  font-size: 14px;
  transition: color 0.3s, transform 0.3s;
  transform: translateY(20px);
  opacity: 0;
}

.author-post:hover .author-details {
  transform: translateY(0);
  opacity: 1;
}

@media (max-width: 768px) {
  .author-container {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  .author-post {
    width: 100%;
  }

  .all-authors {
    width: 100%;
  }
}

.seventeen-font {
  font-size: 17px;
  color: inherit;
}

.description {
  font-size: 14px;
  color: inherit;
}
</style>
