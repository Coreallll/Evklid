document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.step-nav__btn').forEach(function(stepsBtn) {
    stepsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.step-spoiler').forEach(function(stepSpoiler) {
        stepSpoiler.classList.remove('step-spoiler--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('step-spoiler--active')

      document.querySelectorAll('.step-nav__btn').forEach(function(stepsBtn) {
        stepsBtn.classList.remove('step-nav__btn--active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('step-nav__btn--active')
    })
  })
})
