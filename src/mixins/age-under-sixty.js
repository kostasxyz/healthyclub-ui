import { getCurrentDate } from '../services/utils';

export default {
  mounted() {
    const date = getCurrentDate();
    if( (date.year - this.$store.state.registration.birthYear) < 60 ) {
      console.log('Age: ', date.year - this.$store.state.registration.birthYear);
      this.$store.dispatch(
        'registration/setData', 
        { key: 'step', val: this.$store.state.registration.step + this.$store.state.registration.stepDir }
      );
    }
  }
}
