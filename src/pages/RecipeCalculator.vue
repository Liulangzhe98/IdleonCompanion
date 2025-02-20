<template>
  <!-- Info -->
  <div class="row">
    <div>
      <p class="h6 text-light bg-primary p-3 mb-4 rounded">
        Use this page to calculate the materials needed for a recipe. Select
        your recipe, and the quantity to craft.
      </p>
    </div>
  </div>
  <!-- Recipe + Quantity selectors -->
  <div class="row d-flex justify-content-between flex-wrap" id="selectors">
    <!-- Recipe Selector -->
    <div class="col d-flex flex-wrap mb-3">
      <div class="col-auto mb-3 me-3">
        <select v-model="recipe" class="" id="recipe-selector">
          <option value="" selected>Select Your Recipe</option>
          <option v-for="(recipe, id) in data" :key="id" :value="id">
            {{ recipe.name }}
          </option>
        </select>
      </div>
      <!-- Quantity Input -->
      <div class="col-auto">
        <div class="input-group">
          <span class="input-group-text">Quantity</span>
          <input
            v-model.number="quantity"
            type="number"
            min="1"
            id="recipe-quantity"
            class="form-control"
          />
        </div>
      </div>
      <!-- Game Version Note -->
    </div>
    <div class="col-auto text-light">
      <div id="version-group" class="p-2">
        <h3>Last Updated</h3>
        <p>v1.20b</p>
        <p>June 4, 2021</p>
      </div>
    </div>
  </div>
  <!-- Display Materials -->
  <div v-if="recipe && quantity" class="text-light">
    <h4>Materials</h4>
    <div
      class="row"
      v-for="(material, index) in materials.materials"
      :key="`material-${index}`"
    >
      <div class="border-top border-bottom col-sm-2">
        {{ material.quantity * parseInt(quantity) }}
      </div>
      <div class="border-top border-bottom col-sm-10">
        {{ material.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import calculatorData from "~/data/recipeCalculator.json";

type MaterialObject = {
  name: string;
  quantity: number;
};

type RecipeObject = {
  name: string;
  materials: Array<MaterialObject>;
};

export default defineComponent({
  name: "RecipeCalculator",
  setup() {
    const data: Record<string, RecipeObject> = calculatorData;
    const recipe = ref("");
    const quantity = ref("");
    const materials = computed(
      (): RecipeObject => {
        if (recipe.value === "") {
          return {} as RecipeObject;
        }
        return data[recipe.value];
      }
    );
    return { data, recipe, quantity, materials };
  },
});
</script>

<style lang="sass" scoped>
@import '../styles/base.sass'

#version-group
  border: 2px solid $primary
  border-radius: 0.25rem
</style>