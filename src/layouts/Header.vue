<template>
  <div class="MainPage">
    <div class="TopMenuWrapper">

      <router-link to="/" class="LogoLink">
        <img src="@/assets/icons/ico/logo.ico" alt="Логотип сайта" class="Logo"/>
      </router-link>

      <input type="text" class="SearchInput" placeholder="Поиск..."/>

      <div class="PageLink">
        <div class="PageLink-item">
          <router-link to="/allSongs" class="Navbar-link">
            <button class="Navbar-button">ВСЕ ПЕСНИ</button>
          </router-link>
          <router-link to="/genres" class="Navbar-link">
            <button class="Navbar-button">ЖАНРЫ</button>
          </router-link>
          <router-link to="/musicians" class="Navbar-link">
            <button class="Navbar-button">ИСПОЛНИТЕЛИ</button>
          </router-link>
        </div>

        <div class="Navbar-button" @click="toggleBurgerMenu">БУРГЕР</div>
        <div class="BurgerMenu" :class="{ 'active': burgerMenuActive }" ref="burgerMenu">
          <div class="BurgerMenu-item">
            <router-link to="/chordsLibrary" class="BurgerMenu-link">Библиотека аккордов</router-link>
          </div>
          <div class="BurgerMenu-item">
            <router-link to="/chordGenerator" class="BurgerMenu-link">Генератор аккордов</router-link>
          </div>
          <div class="BurgerMenu-item">
            <router-link to="/tuner" class="BurgerMenu-link">Тюнер</router-link>
          </div>
          <div class="BurgerMenu-item">
            <router-link to="/song" class="BurgerMenu-link">Пример отображения песни</router-link>
          </div>
          <div class="BurgerMenu-item">
            <router-link to="/addSong" class="BurgerMenu-link">Добавить песню</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="Content">
    <slot></slot>
  </div>
</template>


<script>
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
      if (menu && !menu.contains(event.target) && !event.target.classList.contains('Navbar-button')) {
        this.burgerMenuActive = false;
        document.removeEventListener('click', this.handleClickOutside);
      }
    }
  }
};
</script>

<style scoped>
.TopMenuWrapper {
  display: flex;
  align-items: center;
  background-color: rgba(17, 17, 17, 1);
  max-height: 75px;
  padding-top: 3%;
  position: relative; /* Родительский элемент должен быть относительно спозиционирован */
}

.TopMenuWrapper img {
  max-height: 75px;
}

.SearchInput {
  width: 35%;
  height: 100%;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.PageLink {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.PageLink-item {
  display: flex;
  align-items: center;
}

.Navbar-button {
  background-color: transparent;
  border: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  margin-right: 20px;
}

.BurgerMenu {
  position: absolute; /* Меняем на absolute для позиционирования относительно родителя */
  top: 100%; /* Устанавливаем позицию под кнопкой */
  left: 0; /* Обеспечиваем, что меню будет слева относительно родителя */
  background-color: rgba(17, 17, 17, 1);
  display: none;
  flex-direction: column;
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 10; /* Устанавливаем высокий z-index, чтобы меню было выше остальных элементов */
}

.BurgerMenu.active {
  display: flex;
  opacity: 1;
  transform: translateY(0);
}

.BurgerMenu-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
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
