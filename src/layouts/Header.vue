<template>
  <div class="TopMenuWrapper">
    <div class="MainLogoWrapper">
      <router-link to="/" class="LogoLink">
        <img src="@/assets/icons/ico/logo.ico" alt="Логотип сайта" class="Logo"/>
      </router-link>
    </div>

    <div class="SearchWrapper">
      <input type="text" class="SearchInput" placeholder="Поиск..."/>
    </div>

    <div class="PageButtonsWrapper">
      <router-link to="/songsLibrary" class="Navbar-link">
        <button class="Navbar-button">
          <div class="fourteen-font">
            ВСЕ ПЕСНИ
          </div>
        </button>
      </router-link>
      <router-link to="/allGenres" class="Navbar-link">
        <button class="Navbar-button">
          <div class="fourteen-font">
            ПО ЖАНРАМ
          </div>
        </button>
      </router-link>
      <router-link to="/allMusicians" class="Navbar-link">
        <button class="Navbar-button">
          <div class="fourteen-font">
            ИСПОЛНИТЕЛИ
          </div>
        </button>
      </router-link>
    </div>

    <div class="BurgerWrapper">
      <div class="BurgerButton" @click="toggleBurgerMenu">
        <div class="fourteen-font">
          БУРГЕР
        </div>
      </div>
      <div class="BurgerMenu" :class="{ 'active': burgerMenuActive }" ref="burgerMenu">
        <div class="BurgerMenu-item">
          <router-link to="/chordLibrary" class="BurgerMenu-link">Библиотека аккордов</router-link>
        </div>
        <div class="BurgerMenu-item">
          <router-link to="/tuner" class="BurgerMenu-link">Тюнер</router-link>
        </div>
        <div class="BurgerMenu-item">
          <router-link to="/exampleSong" class="BurgerMenu-link">Пример отображения песни</router-link>
        </div>
        <div class="BurgerMenu-item">
          <router-link to="/addSong" class="BurgerMenu-link">Добавить песню</router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="Content">
    <slot></slot>
  </div>
</template>


<script>
import '@/assets/global-styles.css'

export default {
  name: 'Layout',
  data() {
    return {
      burgerMenuActive: false
    };
  },
  methods: {
    toggleBurgerMenu() {
      this.burgerMenuActive = !this.burgerMenuActive;
      if (this.burgerMenuActive) {
        document.addEventListener('click', this.handleClickOutside);
      } else {
        document.removeEventListener('click', this.handleClickOutside);
      }
    },
    handleClickOutside(event) {
      const menu = this.$refs.burgerMenu;
      if (menu && !menu.contains(event.target) && !event.target.closest('.BurgerButton')) {

        this.burgerMenuActive = false;
        document.removeEventListener('click', this.handleClickOutside);
      }
    }
  }
};
</script>

<style scoped>

.Navbar-button {
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  margin-right: 20px;
}

.TopMenuWrapper {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Добавлено */

  background-color: rgba(17, 17, 17, 1);
  max-height: 75px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.MainLogoWrapper {
  width: 5%;
}

.MainLogoWrapper img {
  width: 100%;
}

.SearchWrapper {
  width: 40%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.SearchInput {
  width: 60%;
  padding: 8px;
  border: none;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.PageButtonsWrapper {
  width: 60%;
  position: relative;
  align-items: center;
  border: 0;
  height: 100%;
}

.BurgerWrapper {
  width: 5%;
  position: relative;
}

.BurgerMenu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(17, 17, 17, 1);
  display: none;
  flex-direction: column;
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 10;
}

.BurgerButton {
  border: none;
  color: transparent;
  cursor: pointer;
  width: 30px; /* Ширина кнопки */
  height: 20px; /* Высота кнопки */
  position: relative;
}

.BurgerButton::before,
.BurgerButton::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px; /* Высота полоски */
  background-color: white;
  top: 50%;
  transform: translateY(-50%);
}

.BurgerButton::before {
  transform: translateY(calc(-50% - 6px)); /* Расположение верхней полоски */
}

.BurgerButton::after {
  transform: translateY(50%); /* Расположение нижней полоски */
}


.BurgerMenu.active {
  display: flex;
  opacity: 1;
  transform: translateY(0);
}

.BurgerMenu-item {
  padding: 10px 20px;
}

.BurgerMenu-link {
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;
}

.BurgerMenu-link:hover {
  color: #ccc;
}

</style>
