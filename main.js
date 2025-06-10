document.querySelectorAll('.team-member').forEach((member) => {
  const img = member.querySelector('.image-wrapper img')

  img.addEventListener('mouseenter', () => {
    member.classList.add('expanded')
  })

  member.addEventListener('mouseleave', () => {
    member.classList.remove('expanded')
  })
})
