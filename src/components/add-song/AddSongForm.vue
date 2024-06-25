<!--<template>-->
<!--  <v-container class="add-song-container">-->
<!--    <v-row class="top-bar" align="center" justify="space-between">-->
<!--      <v-col class="step-section">-->
<!--        <v-chip class="step-display">Шаг {{ currentStep }}</v-chip>-->
<!--      </v-col>-->
<!--      <v-col class="button-section" cols="auto">-->
<!--        <v-btn class="back-button" @click="prevStep" :enabled="currentStep === 1">Назад</v-btn>-->
<!--        <v-btn class="forward-button" @click="nextStep"-->
<!--               :disabled="currentStep === 1 || (currentStep === 5 && !canProceed) || (currentStep === 3 && !albumForm.title)">-->
<!--          Далее-->
<!--        </v-btn>-->
<!--        <v-btn v-if="currentStep === 1 && showAddButton" @click="showAddAuthorForm">Создать</v-btn>-->
<!--        <v-btn v-if="currentStep === 3" @click="skipStep" :disabled="currentStep === 5">Пропустить</v-btn>-->
<!--        <v-btn class="reset-button" @click="resetForm">Сбросить</v-btn>-->
<!--      </v-col>-->
<!--    </v-row>-->

<!--    <v-row class="form-section" align="center" justify="center">-->
<!--      <v-col cols="12">-->
<!--        <div v-if="currentStep === 1">-->
<!--          <v-text-field v-model="inputValue" @input="handleInput" placeholder="Введите автора"/>-->
<!--          <v-btn v-if="showAddButton" @click="showAddAuthorForm">Добавить нового</v-btn>-->
<!--        </div>-->

<!--        <div v-if="currentStep === 2">-->
<!--          <v-text-field v-model="authorForm.pseudonym" label="Псевдоним"/>-->
<!--          <v-text-field v-model="authorForm.realName" label="Реальное имя"/>-->
<!--          <v-text-field v-model="authorForm.birthDate" label="Дата рождения"/>-->
<!--          <v-text-field v-model="authorForm.nationality" label="Национальность"/>-->
<!--          <v-textarea v-model="authorForm.bio" label="Биография"/>-->
<!--        </div>-->

<!--        <div v-if="currentStep === 3">-->
<!--          <v-text-field v-model="albumForm.title" label="Название альбома"/>-->
<!--          <v-text-field v-model="albumForm.releaseDate" label="Дата выпуска"/>-->
<!--          <v-text-field v-model="albumForm.genre" label="Жанр"/>-->
<!--          <v-text-field v-model="albumForm.producer" label="Продюсер"/>-->
<!--          <v-textarea v-model="albumForm.description" label="Описание"/>-->
<!--        </div>-->

<!--        <div v-if="currentStep === 4">-->
<!--          <v-text-field v-model="songForm.title" label="Название песни"/>-->
<!--          <v-text-field v-model="songForm.duration" label="Длительность"/>-->
<!--          <v-textarea v-model="songForm.lyrics" label="Текст песни"/>-->
<!--          <v-text-field v-model="songForm.composer" label="Композитор"/>-->
<!--          <v-text-field v-model="songForm.featuredArtists" label="Исполнители"/>-->
<!--        </div>-->

<!--        <div v-if="currentStep === 5">-->
<!--          <v-textarea v-model="chordsForm.chords" label="Аккорды"/>-->
<!--          <v-text-field v-model="chordsForm.difficultyLevel" label="Уровень сложности"/>-->
<!--          <v-text-field v-model="chordsForm.tuning" label="Настройка"/>-->
<!--          <v-textarea v-model="chordsForm.notes" label="Примечания"/>-->
<!--        </div>-->
<!--      </v-col>-->
<!--    </v-row>-->
<!--  </v-container>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref, watch } from 'vue';-->
<!--import axios from 'axios';-->
<!--import router from "@/router/index.js";-->

<!--const currentStep = ref(1);-->
<!--const inputValue = ref('');-->
<!--const showAddButton = ref(false);-->
<!--const history = ref([]);-->
<!--const authorForm = ref({-->
<!--  pseudonym: '',-->
<!--  realName: '',-->
<!--});-->
<!--const albumForm = ref({-->
<!--  title: '',-->
<!--});-->
<!--const songForm = ref({-->
<!--  title: '',-->
<!--});-->
<!--const chordsForm = ref({-->
<!--  chords: '',-->
<!--});-->

<!--const handleInput = async () => {-->
<!--  try {-->
<!--    const response = await axios.post('/backend-endpoint', { query: inputValue.value });-->
<!--    if (response.status === 200) {-->
<!--      showAddButton.value = false;-->
<!--    }-->
<!--  } catch (error) {-->
<!--    if (error.response && (error.response.status === 400 || error.response.status === 404)) {-->
<!--      showAddButton.value = true;-->
<!--    } else {-->
<!--      console.error('Error handling input:', error);-->
<!--    }-->
<!--  }-->

<!--  if (inputValue.value.length === 0) {-->
<!--    showAddButton.value = false;-->
<!--  }-->
<!--};-->

<!--const showAddAuthorForm = () => {-->
<!--  nextStep();-->
<!--};-->

<!--const saveAlbum = () => {-->
<!--  // Logic to save album-->
<!--};-->

<!--const createAlbum = () => {-->
<!--  saveAlbum();-->
<!--};-->

<!--const saveAuthor = () => {-->
<!--  // Logic to save author-->
<!--};-->

<!--const saveSong = () => {-->
<!--  // Logic to save song-->
<!--};-->

<!--const saveChords = () => {-->
<!--  // Logic to save chords-->
<!--};-->

<!--const nextStep = () => {-->
<!--  if (currentStep.value < 5) {-->
<!--    history.value.push(currentStep.value);-->
<!--    currentStep.value++;-->
<!--  }-->
<!--};-->

<!--const prevStep = () => {-->
<!--  if (currentStep.value === 1) {-->
<!--    router.push({ path: '/' });-->
<!--  } else if (currentStep.value > 1) {-->
<!--    history.value.pop();-->
<!--    currentStep.value&#45;&#45;;-->
<!--  }-->
<!--};-->

<!--const skipStep = () => {-->
<!--  nextStep();-->
<!--};-->

<!--const resetForm = () => {-->
<!--  inputValue.value = '';-->
<!--  showAddButton.value = false;-->
<!--  currentStep.value = 1;-->
<!--  history.value = [];-->
<!--  authorForm.value = {-->
<!--    pseudonym: '',-->
<!--    realName: '',-->
<!--  };-->
<!--  albumForm.value = {-->
<!--    title: '',-->
<!--  };-->
<!--  songForm.value = {-->
<!--    title: '',-->
<!--  };-->
<!--  chordsForm.value = {-->
<!--    chords: '',-->
<!--  };-->
<!--};-->

<!--const canProceed = ref(false);-->
<!--watch([albumForm, songForm, chordsForm], () => {-->
<!--  if (currentStep.value === 3) {-->
<!--    canProceed.value = !!albumForm.value.title;-->
<!--  } else if (currentStep.value === 4) {-->
<!--    canProceed.value = !!songForm.value.title;-->
<!--  } else if (currentStep.value === 5) {-->
<!--    canProceed.value = !!chordsForm.value.chords;-->
<!--  }-->
<!--});-->

<!--</script>-->

<!--<style scoped>-->
<!--.add-song-container {-->
<!--  max-width: 1150px;-->
<!--  margin: 0 auto;-->
<!--  height: calc(60vh - 70px);-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--}-->

<!--.top-bar {-->
<!--  width: 100%;-->
<!--  height: 70px;-->
<!--  border-top: 1px solid rgba(255, 255, 255, 0.1);-->
<!--  border-left: 1px solid rgba(255, 255, 255, 0.1);-->
<!--  border-right: 1px solid rgba(255, 255, 255, 0.1);-->
<!--}-->

<!--.step-section {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--}-->

<!--.button-section {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--}-->

<!--.step-display {-->
<!--  margin-left: 20px;-->
<!--}-->

<!--.form-section {-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  align-items: center;-->
<!--  width: 100%;-->
<!--  margin-top: 20px;-->
<!--}-->
<!--</style>-->
