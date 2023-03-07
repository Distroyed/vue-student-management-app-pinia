<!-- A demonstration of a cart using the Pinia store, also using VUE refs -->
<template>
<div>
    <div class="row justify-content-center ">
        <div class="col-md-6">
            <h1> Cart Demo</h1>
            <form @submit.prevent="addItemToCart">
                <div class="form-group">
                    <label>Course Name</label>
                    <input type="text" class="form-control" v-model="itemName" required>
                </div>
            <button class="btn btn-danger mt-3">Add</button>
            </form>
        </div>
    </div>
    <div class="row justify-content-center pt-5">
        <div class="col-md-6">
            <form @submit.prevent="buy">
                <h3 v-if="cart.items.length > 0"> List of courses in cart: </h3>
                <ul>
                    <li v-for="item in cart.items" :key="item.name">
                        {{ item.name }} ({{ item.amount }})
                        <button
                            @click="cart.removeItem(item.name)"
                            class="btn btn-secondary"
                            type="button"
                            data-bs-toggle="tooltip" data-bs-placement="top" title="Remove Item"
                        >X</button>
                    </li>
                </ul>

                <button :disabled="!isLoggedIn" class="btn btn-success" >Buy</button> &nbsp;
                <button type="button" class="btn btn-primary" :disabled="!cart.items.length" @click="clearCart">Clear the cart</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
//we are using Composition API!
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import { useLoggedInUserStore } from "@/store/loggedInUser";
import { useEnrollmentStore } from "@/store/enrollmentCart";

import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'

export default {
  setup() {
    const loggedInStore = useLoggedInUserStore()
    // `isLoggedIn` here is a reactive ref
    // This will also create ref for properties added by plugins
    // but skip any action or non reactive (non ref/reactive) property
    const { isLoggedIn } = storeToRefs(loggedInStore)

    const cart = useEnrollmentStore();
    const itemName = ref("");

    function addItemToCart() {
      if (!itemName.value) return;
      cart.addItem(itemName.value);
      itemName.value = "";
    }

    function clearCart() {
      if (window.confirm("Are you sure you want to clear the cart?")) {
        cart.rawItems = [];
      }
    }

    async function buy() {
      const n = await cart.purchaseItems();
      console.log(`Bought ${n} items`);
      cart.rawItems = [];
    }

    // expose to template and other options API hooks
    return {
      isLoggedIn,
      itemName,
      addItemToCart,
      cart,
      buy,
      clearCart
    };
  },
  updated() {
      //intitial tooltip(s)
     Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]'))
            .forEach(tooltipNode => new Tooltip(tooltipNode))
  }
};
</script>