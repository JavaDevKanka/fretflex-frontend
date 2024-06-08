<template>
  <div class="square-container">
    <div class="square-icon" v-for="index in 4" :key="index" :style="{ zIndex: zOrder[index - 1], transform: `translate(${translateX[index - 1]}px, ${translateY[index - 1]}px) scale(0.8)` }" @mouseover="rearrangeSquares(index)">
      <img src="@/assets/icons/svg/rectangle.svg" alt="Квадратик" class="centered-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SquareIcon',
  data() {
    return {
      translateX: [0, 90, 0, 90], // увеличиваем расстояние между квадратами
      translateY: [0, 0, 90, 90], // увеличиваем расстояние между квадратами
      zOrder: [1, 2, 0, 3]
    };
  },
  methods: {
    rearrangeSquares(index) {
      if (index === 1) {
        this.translateX.unshift(this.translateX.pop());
        this.translateY.unshift(this.translateY.pop());
        this.zOrder.unshift(this.zOrder.pop());
      } else if (index === 2) {
        this.translateX.splice(0, 0, this.translateX.pop());
        this.translateY.splice(0, 0, this.translateY.pop());
        this.zOrder.splice(0, 0, this.zOrder.pop());
      } else if (index === 3) {
        this.translateX.push(this.translateX.shift());
        this.translateY.push(this.translateY.shift());
        this.zOrder.push(this.zOrder.shift());
      } else if (index === 4) {
        this.translateX.splice(-1, 0, this.translateX.shift());
        this.translateY.splice(-1, 0, this.translateY.shift());
        this.zOrder.splice(-1, 0, this.zOrder.shift());
      }
    }
  }
};
</script>

<style scoped>
.square-container {
  width: 240px; /* увеличиваем ширину контейнера */
  height: 240px; /* увеличиваем высоту контейнера */
  position: relative;
}

.square-icon {
  width: 80px; /* уменьшаем размер квадрата */
  height: 80px; /* уменьшаем размер квадрата */
  position: absolute;
  transition: transform 0.3s ease; /* Анимация перемещения */
}

.centered-image {
  width: 100%;
  height: 100%;
}
</style>
