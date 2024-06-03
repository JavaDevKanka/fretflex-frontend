<template>
  <div class="add-song-container">
    <div class="top-bar">
      <div class="step-section"> <!-- Левая часть с шагом -->
        <div class="step-display">Шаг 1</div> <!-- Поле для отображения шага -->
      </div>
      <div class="button-section"> <!-- Правая часть с кнопками -->
        <button class="back-button">Назад</button> <!-- Кнопка "Назад" -->
        <button class="forward-button">Вперед</button> <!-- Кнопка "Вперед" -->
        <button class="reset-button">Сбросить</button> <!-- Кнопка "Сбросить" -->
      </div>
    </div> <!-- Верхняя полоса с шагом и кнопками -->
    <div class="form-section" style="width: 1150px;"> <!-- Раздел для заполнения формы -->
      <!-- Здесь разместите содержимое вашего раздела для заполнения формы -->
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.add-song-container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  height: calc(60vh - 70px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  border-top: 1px solid rgba(255, 255, 255, 0.1); /* Добавляем верхнюю границу */
  border-left: 1px solid rgba(255, 255, 255, 0.1); /* Добавляем левую границу */
  border-right: 1px solid rgba(255, 255, 255, 0.1); /* Добавляем правую границу */
}

.step-section {
  width: 1150px; /* Ширина левой части */
  height: 70px;
  display: flex;
  align-items: center;
}

.button-section {
  display: flex;
  align-items: center;
}

.step-display {
  margin-left: 20px; /* Отступ слева для поля отображения шага */
}

.back-button, .forward-button {
  width: 270px; /* Ширина кнопок "Назад" и "Вперед" */
}

.reset-button {
  width: 70px; /* Ширина кнопки "Сбросить" */
}

</style>
