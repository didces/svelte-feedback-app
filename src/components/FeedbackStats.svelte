<script>
  import {FeedbackStore} from '../stores'

  $: count = $FeedbackStore.length
  $: average = $FeedbackStore.reduce((a, {rating}) => a + rating, 0) / $FeedbackStore.length
  $: text= 'Commentaire'+($FeedbackStore.length>1?'s':'')
</script>

<div class="feedback-stats">
  <h4>{count} {text}</h4>
  <h4>Note moyenne: {average}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>