<script>
import { Line, mixins } from 'vue-chartjs';
// const { reactiveProp } = mixins;

export default {
  extends: Line,
  // mixins: [reactiveProp],

  mounted() {
    this.renderChart({
      labels: ["", "","", ""],
      lineTension: 0,
      datasets: [{
          label: "Βάρος",
          borderColor: "#FC2525",
          pointBackgroundColor: "red",
          borderWidth: 1,
          pointBorderColor: "white",
          backgroundColor: '#3dc2d0',
          data: [100, 100, 99, 99],
          lineTension: 0,
          pointRadius: 6
      }]
    }, 
    {
      responsive: true,
      maintainAspectRatio: false,
      lineTension: 0,
    })
  }
}
</script>
