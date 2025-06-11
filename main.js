document.querySelectorAll('.team-member').forEach((member) => {
  const img = member.querySelector('.image-wrapper img')

  img.addEventListener('mouseenter', () => {
    member.classList.add('expanded')
  })

  member.addEventListener('mouseleave', () => {
    member.classList.remove('expanded')
  })
})

// 드래그로 스크롤 가능하게
const gallery = document.querySelector('.project-gallery')
let isDown = false
let startX, scrollLeft

gallery.addEventListener('mousedown', (e) => {
  isDown = true
  gallery.classList.add('active')
  startX = e.pageX - gallery.offsetLeft
  scrollLeft = gallery.scrollLeft
})
gallery.addEventListener('mouseleave', () => {
  isDown = false
  gallery.classList.remove('active')
})
gallery.addEventListener('mouseup', () => {
  isDown = false
  gallery.classList.remove('active')
})
gallery.addEventListener('mousemove', (e) => {
  if (!isDown) return
  e.preventDefault()
  const x = e.pageX - gallery.offsetLeft
  const walk = (x - startX) * 1.2 // 드래그 감도
  gallery.scrollLeft = scrollLeft - walk
})

// 마우스 휠을 가로 스크롤로 전환
gallery.addEventListener('wheel', (e) => {
  if (e.deltaY === 0) return
  e.preventDefault()
  gallery.scrollLeft += e.deltaY
})

const leftBtn = document.querySelector('.scroll-btn.left')
const rightBtn = document.querySelector('.scroll-btn.right')

// 카드 하나 크기만큼 좌/우로 이동 (gap 포함)
const cardWidth = 350 + 28 // 카드 너비 + gap

leftBtn.addEventListener('click', () => {
  gallery.scrollBy({ left: -cardWidth, behavior: 'smooth' })
})
rightBtn.addEventListener('click', () => {
  gallery.scrollBy({ left: cardWidth, behavior: 'smooth' })
})
