<template>
  <div
      class="square-container"
      @mouseover="startAnimation"
      @mouseleave="resetAnimation"
  >
    <div
        class="square-icon"
        v-for="index in 4"
        :key="index"
        :style="{
          zIndex: zOrder[index - 1],
          transform: `translate(${translateX[index - 1]}%, ${translateY[index - 1]}%) scale(0.8)`
        }"
    >
      <img src="@/assets/icons/svg/rectangle.svg" alt="Квадратик" class="centered-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SquareIcon',
  data() {
    return {
      translateX: [50, -50, 50, -50],
      translateY: [-50, -50, 50, 50],
      zOrder: [0, 1, 2, 3],
      animationPlayed: false // флаг для отслеживания выполнения анимации
    };
  },
  methods: {
    startAnimation() {
      if (!this.animationPlayed) {
        this.translateX = [-50, -50, 50, 50];
        this.translateY = [50, -50, -50, 50];
        this.zOrder = [3, 0, 1, 2];
        this.animationPlayed = true;
      }
    },
    resetAnimation() {
      if (this.animationPlayed) {
        this.translateX = [50, -50, 50, -50];
        this.translateY = [-50, -50, 50, 50];
        this.zOrder = [2, 1, 3, 0];
        this.animationPlayed = false;
      }
    }
  }
};
</script>

<style scoped>
.square-container {
  --container-size: 100%;
  width: var(--container-size);
  height: var(--container-size);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.square-icon {
  width: 25%;
  height: 25%;
  position: absolute;
  transition: transform 0.3s ease;
  transform: translate(-50%, -50%) scale(0.8);
}

.centered-image {
  width: 100%;
  height: 100%;
}
</style>
