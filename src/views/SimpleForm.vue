<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="sendForm">
      <BaseSelect
        :options="categories"
        v-model="event.category"
        label="Select a category"
      />
      <h3>Name & describe your event</h3>
      <BaseInput v-model="event.title" label="Title" type="text" />
      <BaseInput v-model="event.description" label="Description" type="text" />

      <h3>Where is your event?</h3>

      <BaseInput v-model="event.location" label="Location" type="text" />

      <h3>Are pets allowed?</h3>
      <div>
        <BaseRadioGroup
          v-model="event.pets"
          name="pets"
          :options="petOptions"
          vertical
        />
        <!-- BaseRadioGroup replace the two BaseRadio  -->
        <!-- <BaseRadio v-model="event.pets" :value="0" label="No" name="pets" />
        <BaseRadio v-model="event.pets" :value="1" label="Yes" name="pets" /> -->
      </div>

      <h3>Extras</h3>
      <div>
        <BaseCheckbox v-model="event.extras.catering" label="Catering" />
      </div>

      <div>
        <BaseCheckbox v-model="event.extras.music" label="Live Music" />
      </div>

      <button type="submit">Submit</button>
    </form>

    <!-- <pre>{{ event }}</pre> -->
  </div>
</template>

<script>
import BaseCheckbox from "@/components/BaseCheckbox.vue";
import BaseInput from "@/components/BaseInput.vue";
// import BaseRadio from "@/components/BaseRadio.vue";
import BaseRadioGroup from "@/components/BaseRadioGroup.vue";
import BaseSelect from "@/components/BaseSelect.vue";
import axios from "axios";
export default {
  name: "SimpleForm",
  components: {
    BaseInput,
    BaseSelect,
    BaseCheckbox,
    // BaseRadio,
    BaseRadioGroup,
  },
  data() {
    return {
      categories: [
        "sustainability",
        "nature",
        "animal welfare",
        "housing",
        "education",
        "food",
        "community",
      ],
      event: {
        category: "",
        title: "",
        description: "",
        location: "",
        pets: 1,
        extras: {
          catering: false,
          music: false,
        },
      },
      petOptions: [
        { label: "Yes", value: 1 },
        { label: "No", value: 0 },
      ],
    };
  },
  methods: {
    sendForm() {
      // function to handle form submission
      axios
        .post(
          "https://my-json-server.typicode.com/mnadea001/real-world-vue/events",
          this.event
        )
        .then(function (response) {
          console.log("Response", response);
        })
        .catch(function (err) {
          console.log("Error", err);
        });
    },
  },
};
</script>
