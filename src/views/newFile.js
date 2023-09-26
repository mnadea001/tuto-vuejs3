import axios from "axios";

export default (await import('vue')).defineComponent({
name: "EventList",
components: {
EventCard,
},
data() {
return {
events: null,
};
},
created() {
axios.get(
"https://my-json-server.typicode.com/mnadea001/real-world-vue/events"
)
.then(response => console.log("events:", response.data));
}
});
